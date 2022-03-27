import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit {

  newsDataList: any = [];
  loading : boolean = true;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data:any) =>{
      this.newsDataList = [...data.articles];
      this.loading = false;
    })
  }

  onNewsClick(url: string): void {
    window.open(url, "_blank");
  }
}
