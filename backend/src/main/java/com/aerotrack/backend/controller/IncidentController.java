package com.aerotrack.backend.controller;

import com.aerotrack.backend.dto.ApiResponse;
import com.aerotrack.backend.dto.IncidentRequest;
import com.aerotrack.backend.dto.IncidentResponse;
import com.aerotrack.backend.service.IncidentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import java.util.List;

@RestController
@RequestMapping("/api/incidents")
@RequiredArgsConstructor
public class IncidentController {

    private final IncidentService service;

    @GetMapping
    public Page<IncidentResponse> getAll(
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        return service.getAll(status, pageable);
    }

    @GetMapping("/search")
    public Page<IncidentResponse> search(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String severity,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {

        return service.search(keyword, severity, page, size);
    }

    @PostMapping
    public IncidentResponse create(@Valid @RequestBody IncidentRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public IncidentResponse update(@PathVariable Long id, @Valid @RequestBody IncidentRequest request) {
        return service.update(id, request);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ApiResponse delete(@PathVariable Long id) {
        return service.delete(id);
    }
}