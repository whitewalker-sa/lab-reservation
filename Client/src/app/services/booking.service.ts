import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  bookings: Booking[];
  refreshBookingListFunction: Function;

  readonly baseURL = 'http://localhost:4200/api/bookings/';

  // Get bookings
  getBookingList() {
    return this.http.get(this.baseURL);
  }

  // Get bookings by date

  getBookingListByDate(date: Date) {
    return this.http.get(this.baseURL + 'bydate/' + date);
  }

  // Post booking
  postBooking(booking: Booking) {
    return this.http.post(this.baseURL, booking);
  }

  // Post booking
  putBooking(booking: Booking) {
    return this.http.put(this.baseURL + booking._id, booking);
  }

  // Delete booking
  deleteBooking(booking: Booking) {
    return this.http.delete(this.baseURL + booking._id);
  }
}
