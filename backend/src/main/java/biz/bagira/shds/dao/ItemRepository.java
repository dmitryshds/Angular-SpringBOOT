package biz.bagira.shds.dao;

import biz.bagira.shds.entitys.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface ItemRepository extends PagingAndSortingRepository<Item,Long> {
        Page<Item> findAllByCategory_Id(@Param("categoryId")Long categoryId, Pageable pageable);
        Item findByCategory_IdAndItemId(@Param("categoryId")Long categoryId,@Param("itemId") Long itemId);


}
