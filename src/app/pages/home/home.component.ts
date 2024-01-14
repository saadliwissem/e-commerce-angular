import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: any[] = [
    {
      productId: 1,
      productImageUrl:
        'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/i/p/iphone-13-pro-max-128go-vert-alpin-apple.jpg',
      productName: 'iphone 13 pro max',
      productPrice: '2950',
    },
    {
      productId: 2,
      productImageUrl:
        'https://cdn.3dmodels.org/wp-content/uploads/Huawei/350_Huawei_P50_Pro_Black/Huawei_P50_Pro_Black_1000_0001.jpg',
      productName: 'huawei p50 pro',
      productPrice: '3120',
    },
    {
      productId: 3,
      productImageUrl:
        'https://galleriatech.com.tn/img/p/9/5/1/951-large_default.jpg',
      productName: 'huawei Y9A',
      productPrice: '1200',
    },
    {
      productId: 4,
      productImageUrl:
        'data:image/jpeg;base64,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',
      productName: 'Samsung galaxy s23 Ultra',
      productPrice: '5410',
    },
    {
      productId: 5,
      productImageUrl:
        'https://ae01.alicdn.com/kf/Hf71d9fc3d80f4148a96d3661dc7a73dcf/1110-Cheap-Original-Unlocked-Nokia-1110-GSM-2G-1-8-Inches-Used-Old-Mobile-Classic-Phone.jpg',
      productName: 'Nokia 1110',
      productPrice: '10',
    },
    {
      productId: 6,
      productImageUrl:
        'https://media.gq-magazine.co.uk/photos/5d1399752881cc7da90a84c6/master/w_1600%2Cc_limit/nokia3310.jpg',
      productName: 'Nokia 3310',
      productPrice: '5',
    },
    {
      productId: 7,
      productImageUrl:
        'https://bestphones.tn/images/cache-iphone-xs-max-rose-jaune-vert-blue-mauve_1635426249.png',
      productName: 'cache Iphone 6',
      productPrice: '15',
    },
    {
      productId: 8,
      productImageUrl: 'https://shopa.tn/wp-content/uploads/2023/02/1-3-2.jpg',
      productName: 'chargeur Iphone ',
      productPrice: '150',
    },
  ];
  displayedList: any = this.productList;
  searchTerm: string = ''; // New property to store the search term

  // Function to filter products based on the search term
  searchProducts() {
    if (this.searchTerm.trim() === '') {
      // If the search term is empty, reset the product list to show all products
      this.displayedList = this.productList;
    } else {
      // Otherwise, filter the products based on the search term
      this.displayedList = this.productList.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      );
    }
  }
  cartObj: any = {
    CartId: 0,
    CustId: 1,
    ProductId: 0,
    Quantity: 0,
    AddedDate: '2023-04-27T07:12:40.926Z',
  };
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    debugger;
    this.loadAllProducts();
  }

  loadAllProducts() {
    debugger;
    this.productService.getAllProducts().subscribe((result: any) => {
      this.productList = result.data;
    });
  }

  addItemToCart(productId: number) {
    debugger;
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any) => {
      if (result.result) {
        alert('Product Added To Cart');
        this.productService.cartAddedSubject.next(true);
      }
    });
  }
}
