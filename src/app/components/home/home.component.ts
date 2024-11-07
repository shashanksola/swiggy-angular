import { Component } from '@angular/core';
import { Card } from '../../Card';
import { CardComponent } from "../card/card.component";
import { NgFor, NgIf } from '@angular/common';
import { SigninComponent } from "../signin/signin.component";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgFor, SigninComponent, NgIf, HttpClientModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  groceries: Card[] = [
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/0a688af1-1bb4-4a55-8128-31fc79cc9ad0_6d0abb9a-daff-4fbe-a1c9-2dddb6ae6717" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/85df9d8f-175f-4e3a-8945-468bf6317eee_eb9bf247-f2d1-413d-9cf5-48bc870b222f" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/ce6b51d4-0a5d-46c1-9f56-1a0d410c6e3f_d1e4f024-7ee2-4b7c-a12d-158f856a8aa2" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/db6c3340-4b90-4716-947b-ae3437c04a14_f17a2585-e93f-4545-9992-e8a8e44b5ddb" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/c3e3892b-6644-432a-ae05-8a74727ca815_f9c97608-571f-43fd-b4f9-c2aaafd9bd88" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/1b399bee-38d3-4d59-a5b9-d81099257cab_0cdaa02f-7e62-4f79-a5d9-727abe1d16a5" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/2ead57e4-00b3-4525-91b2-9eb37a4be375_eee95c8a-e736-42ed-ab86-46add6ffe374" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/9314636d-dcb2-468b-bdad-9170f4133e14_00e24371-61a6-4ab5-98e9-552bb94d2557" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/8344b7d1-c41a-4225-8b1d-8a2de011780a_0b366fdd-d4ab-467e-9349-c8ec57f65cda" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/c1d3779d-9b01-4853-8cad-99185e39c933_a0e15a76-ea59-47e6-a98e-0bb4dfc40600" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/67be61b3-99b4-4037-823c-a2cf0155b0af_00bd4c81-9099-4868-be16-0fdeb382a8dc" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/e33d8321-cb8c-4732-9149-beb834eb24e4_8cee91b0-a380-43bb-90cf-9346a322ebeb" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/ed1b860f-4fc6-421e-ace8-3c2bde3fc676_3404cf52-d2ad-43db-a349-0846871ddcfa" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/977de398-06fe-4d77-bc77-55158c438dad_9aa7f78a-9590-4625-88e7-520cc29ae3f7" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/23/f087b141-68ed-4309-8b27-4a48e5d74b2b_2122c99a-e742-4fdd-9132-b43c370fd2b9" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/7c574228-ae92-4199-a45b-dfc3229c09e7_69a4ac73-d9f5-498b-a5cc-40afd90ee4b0" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/9/4e5eec2b-4797-4a93-989a-71b0f5958a3f_cae7e951-fc56-4886-86dd-f583e2373c52" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/e50a580b-4bd7-449a-af9e-fbf01ea18843_e5e21b56-781f-4ccd-b431-a343a23fecb3" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/5/9/61933ca1-f2fa-443a-910d-feb2ab6ecf79_c849fce4-cdab-4317-8fb5-b6dff377dba9" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/0798c1d0-34e0-4f87-a7eb-38183c69d743_7cb04bf5-5a28-49dd-b2cc-672650059671" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/e2f8a4f3-aad4-446d-994e-8e2481661937_7552c2b7-78bf-42c6-b988-b94b3e1015dc" }
  ];

  cardItems1: Card[] = [
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poori.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Omelette.png" }
  ];

  cardItems2: Card[] = [
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pancake.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Parotta.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poha-1.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Uthappam.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Upma.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png" },
    { imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png" }
  ];

  cities: String[] = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Chandigarh"
  ];

  grocerieID: number = 0;
  ordersID: number = 0;

  openStatus: string = 'hidden';
  loginStatus: string = '';

  onSigninClick() {
    this.openStatus = 'no-doc-scroll'
  }

  onClose(status: string) {
    this.openStatus = status;
  }

  onLoginChange(lstatus: string) {
    this.loginStatus = lstatus;
  }

  scrollToNext(item: String, id: number) {
    if (item === "grocerie") {
      if (id >= 13) {
        this.grocerieID = 20;
        id = 13
      }
      else this.grocerieID += 7
    }

    if (item === "order") {
      if (id >= 2) {
        this.ordersID = 9;
        id = 2;
      }
      else this.ordersID += 7;
    }

    const el = document.getElementById(`${item}-${id + 7}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  scrollToPrev(item: String, id: number) {
    if (id <= 6) id = 7;
    if (item === "order") this.ordersID = Math.max(0, id - 7);
    else this.grocerieID = Math.max(0, id - 7);
    const el = document.getElementById(`${item}-${id - 7}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}