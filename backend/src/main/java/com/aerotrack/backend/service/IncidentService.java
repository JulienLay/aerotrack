package com.aerotrack.backend.service;

import com.aerotrack.backend.dto.ApiResponse;
import com.aerotrack.backend.dto.IncidentRequest;
import com.aerotrack.backend.dto.IncidentResponse;
import com.aerotrack.backend.entity.Incident;
import com.aerotrack.backend.entity.Status;
import com.aerotrack.backend.exception.NotFoundException;
import com.aerotrack.backend.mapper.IncidentMapper;
import com.aerotrack.backend.repository.IncidentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@Service
@RequiredArgsConstructor
public class IncidentService {

    private final IncidentRepository repository;
    private final IncidentMapper mapper;

    public IncidentResponse create(IncidentRequest request) {

        Incident incident = mapper.toEntity(request);

        Incident saved = repository.save(incident);

        return mapper.toResponse(saved);
    }

    public Page<IncidentResponse> getAll(String status, Pageable pageable) {

        Page<Incident> incidents;

        if (status != null) {
            Status s = Status.valueOf(status);
            incidents = repository.findByStatus(s, pageable);
        } else {
            incidents = repository.findAll(pageable);
        }

        return incidents.map(mapper::toResponse);
    }

    public IncidentResponse getById(Long id) {
        Incident incident = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Incident not found"));

        return mapper.toResponse(incident);
    }

    public IncidentResponse update(Long id, IncidentRequest request) {

        Incident incident = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Incident not found"));

        mapper.updateEntityFromRequest(request, incident);

        Incident saved = repository.save(incident);

        return mapper.toResponse(saved);
    }

    public ApiResponse delete(Long id) {

        Incident incident = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Incident not found"));

        repository.delete(incident);

        return new ApiResponse("Incident deleted successfully");
    }

    public Page<IncidentResponse> search(
            String keyword,
            String severity,
            int page,
            int size
    ) {

        Pageable pageable = PageRequest.of(page, size);

        Page<Incident> incidents;

        if (keyword != null && severity != null) {

            incidents = repository.findByTitleContainingIgnoreCaseAndSeverity(
                    keyword,
                    Enum.valueOf(com.aerotrack.backend.entity.Severity.class, severity),
                    pageable
            );

        } else if (keyword != null) {

            incidents = repository.findByTitleContainingIgnoreCase(
                    keyword,
                    pageable
            );

        } else if (severity != null) {

            incidents = repository.findBySeverity(
                    Enum.valueOf(com.aerotrack.backend.entity.Severity.class, severity),
                    pageable
            );

        } else {

            incidents = repository.findAll(pageable);
        }

        return incidents.map(mapper::toResponse);
    }

    private Status parseStatus(String status) {

        try {
            return Status.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException(
                    "Invalid status value"
            );
        }
    }
}