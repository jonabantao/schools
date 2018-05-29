package com.example.schoolsapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;


@Data
@NoArgsConstructor @Getter @Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class School {
    String mapLabel;

    String campusName;

    String campusAddress;

    String gradeRange;

    short lowerGrade;

    short upperGrade;
}
