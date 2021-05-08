package com.devS.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devS.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
