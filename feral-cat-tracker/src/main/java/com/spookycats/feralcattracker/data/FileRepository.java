package com.spookycats.feralcattracker.data;

import com.spookycats.feralcattracker.models.Files;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<Files, String> {

}
