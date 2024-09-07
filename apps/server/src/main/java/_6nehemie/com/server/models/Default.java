package _6nehemie.com.server.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

/**
 * Default class is a base class for entities.
 * It contains a generated ID field that will be inherited by other entities.
 */
@MappedSuperclass
@Getter
@Setter
public class Default {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // The primary key for the entity, auto-generated by the database
}