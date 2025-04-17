import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  constructor(private http: HttpClient) {}

  submitFeedback(feedbackData: any) {
    return this.http.post('http://localhost:8080/submitFeedback', feedbackData);
  }
}
