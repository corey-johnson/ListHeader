import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  data: any =
      [
          {
              headerTitle: "Action",
              animes: [
                  {
                      animeTitle: "My Hero Academia Season 1",
                      retailPrice:"$64.99",
                      yourPrice:  "$44.95",
                      rating:     "PG-13",
                      studio:     "Bones",
                      licensor:   "Funimation"
                  },
                  {
                      animeTitle: "One Punch Man Season 1",
                      retailPrice:"$88.97",
                      yourPrice:  "$59.98",
                      rating:     "R-17+",
                      studio:     "Madhouse",
                      licensor:   "Viz Media"
                  },
                  {
                      animeTitle: "Attack on Titan Season 1",
                      retailPrice:"$64.99",
                      yourPrice:  "$44.97",
                      rating:     "R-17+",
                      studio:     "Wit Studio",
                      licensor:   "Funimation"
                  }
              ]
          },
          {
              headerTitle: "Mecha",
              animes: [
                          {
                              animeTitle: "Gundam Seed Complete Collection",
                              retailPrice:"$69.95",
                              yourPrice:  "$49.95",
                              rating:     "R-17+",
                              studio:     "Sunrise",
                              licensor:   "Bandai Entertainment"
                          },
                          {
                              animeTitle: "Code Geass: Lelouch of the Rebellion Complete Collection",
                              retailPrice:"$99.95",
                              yourPrice:  "$69.99",
                              rating:     "R-17+",
                              studio:     "Sunrise",
                              licensor:   "Funimation"
                          },
                          {
                              animeTitle: "Aldnoah.Zero Complete Collection",
                              retailPrice:"$129.99",
                              yourPrice:  "$89.97",
                              rating:     "R-17+",
                              studio:     "A-1 Pictures",
                              licensor:   "Aniplex of America"
                          }
                      ]
          },
          {
              headerTitle: "Military",
              animes: [
                  {
                      animeTitle: "Fullmetal Alchemist: Brotherhood Complete Collection",
                      retailPrice:"$74.99",
                      yourPrice:  "$54.95",
                      rating:     "R-17+",
                      studio:     "Bones",
                      licensor:   "Funimation/Aniplex of America"
                  },
                  {
                      animeTitle: "Gate Complete Collection",
                      retailPrice:"$64.99",
                      yourPrice:  "$39.98",
                      rating:     "R-17+",
                      studio:     "A-1 Pictures",
                      licensor:   "Sentai Filmworks"
                  },
                  {
                      animeTitle: "Heavy Object Complete Collection",
                      retailPrice:"$64.99",
                      yourPrice:  "$44.97",
                      rating:     "PG-13",
                      studio:     "J.C.Staff",
                      licensor:   "Funimation"
                  }
              ]
          },
          {
              headerTitle: "Romance",
              animes: [
                  {
                      animeTitle: "Clannad Complete Collection",
                      retailPrice:"$54.99",
                      yourPrice:  "$34.95",
                      rating:     "PG-13",
                      studio:     "Kyoto Animation",
                      licensor:   "Sentai Filmworks"
                  },
                  {
                      animeTitle: "Sword Art Online",
                      retailPrice:"$94.99",
                      yourPrice:  "$69.98",
                      rating:     "PG-13",
                      studio:     "A-1 Pictures",
                      licensor:   "Aniplex of America"
                  },
                  {
                      animeTitle: "Your lie in April Complete Collection",
                      retailPrice:"$129.99",
                      yourPrice:  "$94.97",
                      rating:     "PG-13",
                      studio:     "A-1 Pictures",
                      licensor:   "Aniplex of America"
                  }
              ]
          },
          {
              headerTitle: "Shounen",
              animes: [
                  {
                      animeTitle: "Blue Exorcist Season 1",
                      retailPrice:"$124.99",
                      yourPrice:  "$84.95",
                      rating:     "PG-13",
                      studio:     "A-1 Pictures",
                      licensor:   "Aniplex of America"
                  },
                  {
                      animeTitle: "Naruto Uncut 1",
                      retailPrice:"$44.99",
                      yourPrice:  "$29.98",
                      rating:     "PG-13",
                      studio:     "Studio Pierrot",
                      licensor:   "Viz Media"
                  },
                  {
                      animeTitle: "Soul Eater Complete Collection",
                      retailPrice:"$69.99",
                      yourPrice:  "$54.97",
                      rating:     "PG-13",
                      studio:     "Bones",
                      licensor:   "Funimation"
                  }
              ]
          }
      ];

  constructor() {
    console.log('Hello DatabaseProvider Provider');
  }

}
