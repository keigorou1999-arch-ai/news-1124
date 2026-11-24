# news-1124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/keigorou1999-arch-ai/news-1124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/keigorou1999-arch-ai/news-1124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image that sums up the world's news of Tuesday, 24 November 2026, laid out like a newspaper front page: the date as the masthead, the day's biggest story on top, a line-drawn world map with numbered pins, and one short headline with a drawing for each of nine stories from around the world.

![World news, Tuesday 24 November 2026](entry.png)

The picture is drawn by hand as HTML and SVG in `source/page.html` (no generated images, no photos, no logos) and rendered to `entry.png` with headless Chrome. `main.ts` checks that the PNG is whole, at most 1024 by 1024 pixels and at most 1 MiB, then writes the same bytes to the output directory.

| # | Story | Region · field | Reported by |
|---|-------|----------------|-------------|
| 1 | Iran says three tankers ablaze after hitting mines in the Strait of Hormuz | Middle East · conflict | Al Jazeera, Anadolu |
| 2 | Asian stocks soar as Nvidia reinstates Huang | Asia · markets | AP, CNBC |
| 3 | NATO sends radar plane to guard Poland | Europe · security | NBC News, Kyiv Post |
| 4 | Trump orders faster federal executions | United States · justice | RTÉ, Al Jazeera |
| 5 | WHO chief visits Cuba's strained hospitals | Caribbean · health | Al Jazeera, Reuters |
| 6 | South African cities tighten water limits | Africa · climate | Africanews, Bloomberg |
| 7 | Solomon Islands to end China security pact | Pacific · diplomacy | ABC Australia, Solomon Star |
| 8 | UN chief urges AI rules within a year | World · technology | Al Jazeera, France 24 |
| 9 | FIFA names Women's World Cup hosts for 2031 and 2035 | World · sport | FIFA, Anadolu |

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To render the image again after editing `source/page.html` (macOS, from the repository root):

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1024,1024 --screenshot="$PWD/entry.png" "file://$PWD/source/page.html"
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=az2f4pjc&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
