package com.aerotrack.backend.mapper;

import com.aerotrack.backend.dto.IncidentRequest;
import com.aerotrack.backend.dto.IncidentResponse;
import com.aerotrack.backend.entity.Incident;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface IncidentMapper {

    Incident toEntity(IncidentRequest request);

    IncidentResponse toResponse(Incident incident);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateEntityFromRequest(IncidentRequest request, @MappingTarget Incident incident);
}