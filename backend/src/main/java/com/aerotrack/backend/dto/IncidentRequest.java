package com.aerotrack.backend.dto;

import com.aerotrack.backend.entity.Severity;
import com.aerotrack.backend.entity.Status;
import jakarta.validation.constraints.NotBlank;

public class IncidentRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    private Severity severity;
    private Status status;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Severity getSeverity() { return severity; }
    public void setSeverity(Severity severity) { this.severity = severity; }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }
}