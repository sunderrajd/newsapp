import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      status: "ok",
      totalResults: 3,
      articles: [
        {
          source: { id: "bbc-sport", name: "BBC Sport" },
          author: null,
          title:
            "Darius Visser: Samoan cricketer sets new Twenty20 International record with 39 runs in a single over",
          description:
            "Samoan cricketer Darius Visser sets a new men's Twenty20 International record when he hit 39 runs in a single over during a 2026 T20 World Cup regional qualifier on Tuesday.",
          url: "http://www.bbc.co.uk/sport/cricket/articles/ce8dzp5566mo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/3ade/live/d66fee50-5ec6-11ef-b43e-6916dcba5cbf.jpg",
          publishedAt: "2024-08-20T08:07:23.6869161Z",
          content:
            "Samoan cricketer Darius Visser set a new men's T20 International record when he hit 39 runs in a single over during a 2026 T20 World Cup regional qualifier on Tuesday. \r\nThe 28-year-old faced Vanuatu… [+868 chars]",
        },
        {
          source: { id: "espn-cric-info", name: "ESPN Cric Info" },
          author: null,
          title:
            "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          description:
            "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          publishedAt: "2020-04-27T11:41:47Z",
          content:
            "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
        },
        {
          source: { id: "espn-cric-info", name: "ESPN Cric Info" },
          author: null,
          title:
            "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          description:
            "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          publishedAt: "2020-03-30T15:26:05Z",
          content:
            "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
        },
      ],
    },
  ];

  constructor() {
    super();
    console.log("hello from constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey-Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="MyTitle"
              description="disc"
              imageUrl="https://ichef.bbci.co.uk/news/1024/branded_sport/3ade/live/d66fee50-5ec6-11ef-b43e-6916dcba5cbf.jpg"
              newsUrl="TODO"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="disc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="disc" />
          </div>
        </div>
      </div>
    );
  }
}
