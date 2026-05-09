package com.aerotrack.backend.dto;

import com.aerotrack.backend.entity.Severity;
import com.aerotrack.backend.entity.Status;
import jakarta.validation.constraints.NotBlank;

public class IncidentRequest {
    @NotBlank public String title;
    @NotBlank public String description;
    public Severity severity;
    public Status status;
}