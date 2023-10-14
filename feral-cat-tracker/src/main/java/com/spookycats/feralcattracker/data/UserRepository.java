package com.spookycats.feralcattracker.data;

import com.spookycats.feralcattracker.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);

}