import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders';
import { AuthService } from '../../services/auth';
import { LoadingController, AlertController } from 'ionic-angular';
import { Order } from '../../models/order';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  orders: Order[] = [];

  constructor(
    private ordersService: OrdersService,
    private authservice: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.authservice
      .getActiveUser()
      .getIdToken()
      .then((token: string) => {
        this.ordersService.fetchOrders(token).subscribe(
          (list: Order[]) => {
            loading.dismiss();
            if (list) {
              this.orders = list;
            } else {
              this.orders = [];
            }
          },
          error => {
            loading.dismiss();

            const alert = this.alertCtrl.create({
              title: 'An error occurred!',
              message: error.json().error,
              buttons: ['Ok']
            });
            alert.present();
          }
        );
      });
  }

  onOrderDetails(order) {
    
  }

}
