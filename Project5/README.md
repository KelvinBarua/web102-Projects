# Web Development Project 5 - *Name of App Here*

Submitted by: **Kelvin Barua**

This web app: **Marvel comic book library powered by Marvels API.**

Time spent: **6.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as**
  - [X] *comic books date range (year), total number of comics on-screen, and smallest page count to largest page count*
- [X] **A search bar allows the user to search for an item in the fetched data**
- [ ] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

I've face a tremendous ammount of challenge doing this project. For one, I had very little time this week due to midterms and other life occurrences. I actually had to spent most of my time last weekend building two computers for clients so that pretty much took a away two whole days from my week. Secondly, getting the API to work with my program was super hard. Specifically learning how to authenticate my API url with md5 hashes, timestamps, etc. After I overcame that, I ran into another problem where only 20 comics would show up on my page even though I clearly set the limit parameter to 100. I overcame that through a pagination solution. That also created it's own problems because now, anytime I ctrl + s any changes to my ComicData component, it would rerender more comics on top of the 100 I initally had. Its as if its making API calls on its on when I ctrl + s any changes. Finally, learning how to filter the data such that the names weren't repeated was also a hassle. I ended up creating a separate array caleld titleTracker and ended up using that to check to see if a title was already repeated or not. I still have yet to implement proper filters for my project. 

## License

    Copyright [2024] [Kelvin Barua]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.