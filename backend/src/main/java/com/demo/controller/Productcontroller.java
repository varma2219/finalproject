
package com.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.demo.model.Product;
import com.demo.repository.Productrepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Productcontroller
{
	
	@Autowired
	    private Productrepository prepo;
	    
	    @CrossOrigin(origins="http://localhost:4200")
	    @PostMapping("/insert")
	    public Product insert(@RequestBody Product p)
	    {
	        return this.prepo.save(p);
	    }
	    
	    @CrossOrigin(origins="http://localhost:4200")
	    @PostMapping("/update")
	    public Product update(@RequestBody Product p)
	    {
	        return this.prepo.save(p);
	    }
	    
	    
	    @CrossOrigin(origins="http://localhost:4200")
	    @PostMapping("/delete")
	    public void delete(@RequestBody Product p)
	    {
	        this.prepo.delete(p);
	    }
	    
	    @CrossOrigin(origins="http://localhost:4200")
	    @GetMapping("/view")
	    public List<Product> view()
	    {
	        return this.prepo.findAll();
	    }
	    
	}