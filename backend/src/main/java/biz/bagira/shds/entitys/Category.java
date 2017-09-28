package biz.bagira.shds.entitys;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.hibernate.annotations.GeneratorType;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
@Entity
@NoArgsConstructor
public @Data class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    @NonNull private String name;

    public Category(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public static List<Category> getAllCategorys(){
        List<Category> categoryList = new ArrayList<>();

        categoryList.add(new Category(1l,"Category 1"));
        categoryList.add(new Category(2l,"Category 2"));
        categoryList.add(new Category(3l,"Category 3"));
        categoryList.add(new Category(4l,"Category 4"));
        return categoryList;
    }
}
