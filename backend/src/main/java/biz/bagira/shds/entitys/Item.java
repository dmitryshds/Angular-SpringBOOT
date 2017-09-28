package biz.bagira.shds.entitys;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
@Entity
@NoArgsConstructor
public @Data class Item implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;

    @ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.EAGER)
    @JoinColumn(name = "id")
    private Category category;
    @Column
    private String name;
    @Column
    private String descr;

    @ElementCollection()
    @CollectionTable(name="pictures", joinColumns=@JoinColumn(name="id"))
    @Column
    private List<String> pictures;

    @Column
    private BigDecimal price;


}
