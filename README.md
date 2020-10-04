# Atom-iQ/isomorphic-ui-benchmarks - fork of marko-js/isomorphic-ui-benchmarks

This is the fork of marko-js benchmarks with a benchmark for **Atom-iQ** added.
Currently, only `color-picker` is implemented.

I had to double the size of the colors array, as standard size cannot give the results for **Atom-iQ** - probably it's too fast, as I noticed similar behavior for
**Inferno**, when reducing the size of array.

###### Chrome

### Example results for color-picker, client-side (chrome), colors array size x2 (266 colors)

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 2,681 ops/sec ±0.44% (61 runs sampled)
Running benchmark "react"...
react x 3,618 ops/sec ±0.81% (58 runs sampled)
Running benchmark "vue"...
vue x 2,039 ops/sec ±2.51% (56 runs sampled)
Running benchmark "inferno"...
inferno x 7,411 ops/sec ±0.60% (58 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 27,995 ops/sec ±1.73% (41 runs sampled)
Fastest is atom-iq


Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 2,660 ops/sec ±0.33% (61 runs sampled)
Running benchmark "react"...
react x 3,605 ops/sec ±2.25% (61 runs sampled)
Running benchmark "vue"...
vue x 2,052 ops/sec ±4.44% (59 runs sampled)
Running benchmark "inferno"...
inferno x 7,456 ops/sec ±0.35% (60 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 27,201 ops/sec ±2.07% (38 runs sampled)
Fastest is atom-iq

Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 2,699 ops/sec ±0.23% (61 runs sampled)
Running benchmark "react"...
react x 3,673 ops/sec ±1.55% (61 runs sampled)
Running benchmark "vue"...
vue x 2,056 ops/sec ±2.77% (59 runs sampled)
Running benchmark "inferno"...
inferno x 7,366 ops/sec ±1.73% (40 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 25,762 ops/sec ±1.73% (37 runs sampled)
Fastest is atom-iq

```

Average:

1. Atom-iQ 26986 ops/sec
2. Inferno 7411 ops/sec (~3.6x slower)
3. React 3632 ops/sec (~7.4x slower)
4. Preact 2670 ops/sec (~10.1x slower)
5. Vue 2049 ops/sec (~13.2x slower)

#### Colors array x4 (532 colors)

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 1,104 ops/sec ±16.19% (54 runs sampled)
Running benchmark "react"...
react x 1,857 ops/sec ±2.15% (59 runs sampled)
Running benchmark "vue"...
vue x 965 ops/sec ±4.27% (58 runs sampled)
Running benchmark "inferno"...
inferno x 3,879 ops/sec ±0.32% (60 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 16,889 ops/sec ±2.49% (26 runs sampled)


Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 1,226 ops/sec ±0.50% (60 runs sampled)
Running benchmark "react"...
react x 1,850 ops/sec ±2.44% (57 runs sampled)
Running benchmark "vue"...
vue x 959 ops/sec ±3.39% (59 runs sampled)
Running benchmark "inferno"...
inferno x 3,840 ops/sec ±0.36% (60 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 15,744 ops/sec ±5.50% (26 runs sampled)
Fastest is atom-iq
```

Average

1. Atom-iQ 16316.5 ops/sec
2. Inferno 3859.5 ops/sec (~4.2x slower)
3. React 1853.5 ops/sec (~8.8x slower)
4. Preact 1165 ops/sec (~14x slower)
5. Vue 962 ops/sec (~17x slower)

#### Colors array x8 (1064 colors)

**Atom-iQ is still faster than Inferno with 266 colors!**

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 572 ops/sec ±0.68% (58 runs sampled)
Running benchmark "react"...
react x 956 ops/sec ±0.32% (60 runs sampled)
Running benchmark "vue"...
vue x 480 ops/sec ±3.73% (56 runs sampled)
Running benchmark "inferno"...
inferno x 1,956 ops/sec ±0.40% (59 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 9,094 ops/sec ±1.54% (34 runs sampled)
Fastest is atom-iq

Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 637 ops/sec ±0.60% (58 runs sampled)
Running benchmark "react"...
react x 961 ops/sec ±0.50% (60 runs sampled)
Running benchmark "vue"...
vue x 481 ops/sec ±3.88% (58 runs sampled)
Running benchmark "inferno"...
inferno x 1,952 ops/sec ±0.48% (59 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 9,090 ops/sec ±2.71% (31 runs sampled)
Fastest is atom-iq

Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 624 ops/sec ±1.46% (59 runs sampled)
Running benchmark "react"...
react x 939 ops/sec ±1.65% (56 runs sampled)
Running benchmark "vue"...
vue x 477 ops/sec ±3.33% (58 runs sampled)
Running benchmark "inferno"...
inferno x 1,976 ops/sec ±0.43% (60 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 9,450 ops/sec ±1.49% (39 runs sampled)
Fastest is atom-iq
```

Average

1. Atom-iQ 9211.33 ops/sec
2. Inferno 1961.33 ops/sec (~4.7x slower)
3. React 952 ops/sec (~9.7x slower)
4. Preact 611 ops/sec (~15.1x slower)
5. Vue 479.33 ops/sec (~19.2x slower)

#### Colors array x16 (2128 colors)

All **Virtual DOM** libraries are under 1k ops/sec, **Atom-iQ** is still
over 4k - faster than **React** with **266 colors** and similar as **Vue** with **133 colors** (from old results)

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 291 ops/sec ±0.46% (57 runs sampled)
Running benchmark "react"...
react x 400 ops/sec ±4.63% (51 runs sampled)
Running benchmark "vue"...
vue x 191 ops/sec ±4.76% (52 runs sampled)
Running benchmark "inferno"...
inferno x 916 ops/sec ±3.58% (55 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 4,348 ops/sec ±1.63% (39 runs sampled)
Fastest is atom-iq

Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 283 ops/sec ±0.37% (57 runs sampled)
Running benchmark "react"...
react x 426 ops/sec ±3.22% (56 runs sampled)
Running benchmark "vue"...
vue x 199 ops/sec ±4.26% (54 runs sampled)
Running benchmark "inferno"...
inferno x 907 ops/sec ±3.78% (56 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 4,628 ops/sec ±1.65% (41 runs sampled)
Fastest is atom-iq
```

Average

1. Atom-iQ 4488 ops/sec
2. Inferno 911.5 ops/sec (~4.9x slower)
3. React 413 ops/sec (~10.8x slower)
4. Preact 287 ops/sec (~15.6x slower)
5. Vue 195 ops/sec (~23x slower)

Worth notice is the fact, that for every array doubling, difference between the **Atom-iQ**, and the
rest is bigger. So, from all cases, from 266 to 2128 colors, **Atom-iQ** is `~3.6-4.9x` faster than **Inferno**,
`~7.4-10.8x` faster than **React**, `~10.1-15.6x` faster than **Preact**, `~13.2-23x` faster than **Vue**

Environment:

- Node.js v10.20.1
- MacBook Pro (15-inch, 2015)
- Processor: 2.2 GHz Intel Core i7 4770HQ
- Memory: 16 GB 1600 MHz LPDDR3
- macOS Catalina: 10.15.6
- Google Chrome Version 85.0.4183.121 (Official Build) (64-bit)

###### Other browsers

Just one example per browser, results are similar for every iteration.

##### Firefox 81.0.1, 266 colors:

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 1,567 ops/sec ±1.26% (59 runs sampled)
Running benchmark "react"...
react x 1,723 ops/sec ±1.13% (58 runs sampled)
Running benchmark "vue"...
vue x 1,165 ops/sec ±1.28% (57 runs sampled)
Running benchmark "inferno"...
inferno x 3,697 ops/sec ±1.54% (23 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 29,586 ops/sec ±5.39% (45 runs sampled)
Fastest is atom-iq
```

Interesting is that all **Virtual DOM** frameworks are about **2x slower** on **Firefox**,
than on **Chrome**, while **Atom-iQ** (**Reactive Virtual DOM**) is even faster on **Firefox**.
On **Firefox**, **Atom-iQ** is `~8x` faster than **Inferno**, `~17x` faster than **React**,
`~19x` faster than **Preact**, and `~25x` faster than **Vue**.

##### Safari 13.1.2, 266 colors

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 1,807 ops/sec ±1.00% (57 runs sampled)
Running benchmark "react"...
react x 3,068 ops/sec ±0.45% (61 runs sampled)
Running benchmark "vue"...
vue x 1,532 ops/sec ±0.56% (58 runs sampled)
Running benchmark "inferno"...
inferno x 5,908 ops/sec ±3.75% (33 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 37,520 ops/sec ±1.70% (51 runs sampled)
Fastest is atom-iq
```

Another interesting case - **Virtual DOM** libraries are `~20-30%` slower than on **Chrome**,
**Atom-iQ** is even `~40%` faster on **Safari**

###### Marko documentation

# isomorphic-ui-benchmarks

This repo includes multiple benchmarks for various UI libraries. Each benchmark is designed to measure rendering performance (on the server and in the browser) and the time that it takes to update the DOM (client-side only).

# Current results

## Search results

<img width="1335" alt="Search Results Benchmarks" src="https://user-images.githubusercontent.com/4985201/67251108-ca344780-f422-11e9-9ca0-cce6ed1aad6b.png">

## Color picker

<img width="1323" alt="Color Picker Benchmarks" src="https://user-images.githubusercontent.com/4985201/67251074-a96bf200-f422-11e9-9bee-a15124f4b10d.png">

---

Below are the results of a run on October 21, 2019

Environment:

- Node.js v10.16.1
- MacBook Pro (13-inch, 2017)
- Processor: 3.5 GHz Intel Core i7
- Memory: 16 GB 2133 MHz LPDDR3
- macOS Mojave: 10.14.6
- Google Chrome Version 77.0.3865.120 (Official Build) (64-bit)

## Server-side

```
Warming up...

Warmup complete.

Running "search-results"...

Running benchmark "marko"...

marko x 6,399 ops/sec ±2.71% (84 runs sampled)

Running benchmark "preact"...

preact x 746 ops/sec ±2.88% (81 runs sampled)

Running benchmark "react"...

react x 765 ops/sec ±5.02% (72 runs sampled)

Running benchmark "vue"...

vue x 2,657 ops/sec ±4.41% (60 runs sampled)

Running benchmark "inferno"...

inferno x 3,014 ops/sec ±1.78% (87 runs sampled)

Fastest is marko

--------------


Warming up...

Warmup complete.

Running "color-picker"...

Running benchmark "marko"...

marko x 24,540 ops/sec ±1.48% (86 runs sampled)

Running benchmark "preact"...

preact x 4,587 ops/sec ±1.81% (85 runs sampled)

Running benchmark "react"...

react x 4,300 ops/sec ±4.72% (72 runs sampled)

Running benchmark "vue"...

vue x 9,120 ops/sec ±5.56% (70 runs sampled)

Running benchmark "inferno"...

inferno x 21,453 ops/sec ±2.12% (84 runs sampled)

Fastest is marko

--------------


DONE!

~/marko-js/isomorphic-ui-benchmarks (master)>  node -v
v10.16.1
```

# Client-side

## Search results

### Google Chrome

```
Warming up...
Warmup complete.
Running "search-results"...
Running benchmark "marko"...
marko x 175 ops/sec ±1.84% (53 runs sampled)
Running benchmark "preact"...
preact x 132 ops/sec ±1.66% (48 runs sampled)
Running benchmark "react"...
react x 210 ops/sec ±1.36% (53 runs sampled)
Running benchmark "vue"...
vue x 142 ops/sec ±1.31% (52 runs sampled)
Running benchmark "inferno"...
inferno x 239 ops/sec ±1.24% (55 runs sampled)
Fastest is inferno
```

## Color picker

### Google Chrome

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "marko"...
marko x 6,008 ops/sec ±1.66% (34 runs sampled)
Running benchmark "preact"...
preact x 6,435 ops/sec ±0.96% (59 runs sampled)
Running benchmark "react"...
react x 7,358 ops/sec ±1.43% (58 runs sampled)
Running benchmark "vue"...
vue x 4,291 ops/sec ±1.96% (55 runs sampled)
Running benchmark "inferno"...
inferno x 17,078 ops/sec ±2.17% (60 runs sampled)
Fastest is inferno
```

# Additional details

## Included libraries

The following UI libraries are currently included:

- [inferno](https://github.com/infernojs/inferno)
- [marko](https://github.com/marko-js/marko)
- [preact](https://github.com/developit/preact)
- [react](https://github.com/facebook/react)
- [vue](https://github.com/vuejs/vue)

## Included benchmarks

This repo currently includes the following benchmarks

### Search Results

This benchmark measures the time it takes to render pages of search results. Each page includes 100 search result items. Every iteration renders an entirely new set of search results. As a result of rendering new search results for every cycle, a significant number of DOM nodes must be updated.

### Color Picker

This benchmark measures the time it takes to cycle through a selected color. The selected color index changes every cycle. When the selected color index changes two things happen:

- The new selected color is highlighted
- The old selected color is unhighlighted
- The selected color is shown at the end

Compared to the search results benchmark, there are a relatively small number of changes to the DOM for every cycle.

# Running the benchmarks

## Install

```bash
git clone https://github.com/marko-js/isomorphic-ui-benchmarks.git
cd isomorphic-ui-benchmarks
npm install
npm run build # Build client-side JS bundles
```

## Run server-side benchmarks

```bash
npm run benchmark
```

## Run client-side benchmarks

Start

```bash
npm start
```

Open [http://localhost:8080/](http://localhost:8080/) in your browser and choose a benchmark to run.

# Contributions and Feedback

If you see any problems or have any suggestions please let us know. Every effort was made to be as fair and accurate as possible, but mistakes do happen. If you find a problem please open a Github issue to discuss.
