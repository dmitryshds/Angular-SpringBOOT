package biz.bagira.shds.controllers;

import biz.bagira.shds.dao.CategoryRepository;
import biz.bagira.shds.dao.ItemRepository;
import biz.bagira.shds.entitys.Category;
import biz.bagira.shds.entitys.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestCtrl {
    @Autowired
    ItemRepository itemRepository;

    @Autowired
    CategoryRepository categoryRepository;


    @RequestMapping(value = "/items", method = RequestMethod.GET)
    public Page<Item> getItems(Pageable pageable) {
        return itemRepository.findAll(pageable);
    }

    @RequestMapping(value = "/categories", method = RequestMethod.GET)
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @RequestMapping(value = "/category/{categoryId}", method = RequestMethod.GET)
    public Page<Item> getItemsByCategory(@PathVariable("categoryId") Long categoryId, Pageable pageable){
            return itemRepository.findAllByCategory_Id(categoryId,pageable);
    }
        //'category/:id/item/:itemId'
    @RequestMapping(value = "/category/{categoryId}/item/{itemId}", method = RequestMethod.GET)
    public Item getItemByCategory(@PathVariable("categoryId") Long categoryId, @PathVariable("itemId") Long itemId){
        return itemRepository.findByCategory_IdAndItemId(categoryId,itemId);
    }

}
