# Atom-iQ/isomorphic-ui-benchmarks - fork of marko-js/isomorphic-ui-benchmarks

This is the fork of marko-js benchmarks with a benchmarks for **Atom-iQ** added.

## Last results - only client side, Atom-iQ has not SSR yet

### Search results (Elements x 2)

Safari, as it's the fastest for all

```

Warming up...
Warmup complete.
Running "search-results"...
Running benchmark "preact"...
preact x 109 ops/sec ±0.86% (46 runs sampled)
Running benchmark "react"...
react x 202 ops/sec ±0.76% (54 runs sampled)
Running benchmark "vue"...
vue x 94.60 ops/sec ±0.90% (54 runs sampled)
Running benchmark "inferno"...
inferno x 228 ops/sec ±1.02% (54 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 678 ops/sec ±20.80% (35 runs sampled)
Fastest is atom-iq

Warming up...
Warmup complete.
Running "search-results"...
Running benchmark "preact"...
preact x 105 ops/sec ±1.04% (45 runs sampled)
Running benchmark "react"...
react x 203 ops/sec ±0.79% (54 runs sampled)
Running benchmark "vue"...
vue x 92.44 ops/sec ±0.92% (53 runs sampled)
Running benchmark "inferno"...
inferno x 242 ops/sec ±0.81% (57 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 685 ops/sec ±21.59% (34 runs sampled)
Fastest is atom-iq
```

### Color picker (colors x2)

Chrome, as it's the fastest for all

```
Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 2,468 ops/sec ±0.40% (60 runs sampled)
Running benchmark "react"...
react x 3,480 ops/sec ±1.37% (57 runs sampled)
Running benchmark "vue"...
vue x 1,970 ops/sec ±2.27% (57 runs sampled)
Running benchmark "inferno"...
inferno x 7,111 ops/sec ±0.53% (59 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 29,525 ops/sec ±1.08% (58 runs sampled)
Fastest is atom-iq

Warming up...
Warmup complete.
Running "color-picker"...
Running benchmark "preact"...
preact x 2,488 ops/sec ±0.53% (61 runs sampled)
Running benchmark "react"...
react x 1,834 ops/sec ±1.32% (59 runs sampled)
Running benchmark "vue"...
vue x 1,891 ops/sec ±3.32% (59 runs sampled)
Running benchmark "inferno"...
inferno x 7,005 ops/sec ±0.77% (60 runs sampled)
Running benchmark "atom-iq"...
atom-iq x 29,021 ops/sec ±1.11% (57 runs sampled)
Fastest is atom-iq
```

Environment:

- Node.js v10.20.1
- MacBook Pro (15-inch, 2015)
- Processor: 2.2 GHz Intel Core i7 4770HQ
- Memory: 16 GB 1600 MHz LPDDR3
- macOS Catalina: 10.15.6
- Google Chrome Version 85.0.4183.121 (Official Build) (64-bit)
- Safari 13.1.2 (15609.3.5.1.3)

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
