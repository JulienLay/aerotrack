package com.aerotrack.backend.repository;

import com.aerotrack.backend.entity.Incident;
import com.aerotrack.backend.entity.Severity;
import com.aerotrack.backend.entity.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IncidentRepository extends JpaRepository<Incident, Long> {

    Page<Incident> findByTitleContainingIgnoreCase(
            String keyword,
            Pageable pageable
    );

    Page<Incident> findBySeverity(
            Severity severity,
            Pageable pageable
    );

    Page<Incident> findByTitleContainingIgnoreCaseAndSeverity(
            String keyword,
            Severity severity,
            Pageable pageable
    );

    Page<Incident> findAll(Pageable pageable);

    Page<Incident> findByStatus(Status status, Pageable pageable);
}