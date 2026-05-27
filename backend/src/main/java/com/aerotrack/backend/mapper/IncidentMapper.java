package com.aerotrack.backend.mapper;

import com.aerotrack.backend.dto.IncidentRequest;
import com.aerotrack.backend.dto.IncidentResponse;
import com.aerotrack.backend.entity.Incident;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;


@Mapper(componentModel = "spring")
public interface IncidentMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Incident toEntity(IncidentRequest request);

    IncidentResponse toResponse(Incident incident);

    void updateEntityFromRequest(IncidentRequest request, @MappingTarget Incident incident);
}