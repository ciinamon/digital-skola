/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 278.0, "minX": 0.0, "maxY": 1452.0, "series": [{"data": [[0.0, 278.0], [0.1, 278.0], [0.2, 278.0], [0.3, 278.0], [0.4, 278.0], [0.5, 288.0], [0.6, 288.0], [0.7, 288.0], [0.8, 288.0], [0.9, 288.0], [1.0, 289.0], [1.1, 289.0], [1.2, 289.0], [1.3, 289.0], [1.4, 289.0], [1.5, 298.0], [1.6, 298.0], [1.7, 298.0], [1.8, 298.0], [1.9, 298.0], [2.0, 360.0], [2.1, 360.0], [2.2, 360.0], [2.3, 360.0], [2.4, 365.0], [2.5, 365.0], [2.6, 365.0], [2.7, 365.0], [2.8, 365.0], [2.9, 369.0], [3.0, 369.0], [3.1, 369.0], [3.2, 369.0], [3.3, 369.0], [3.4, 370.0], [3.5, 370.0], [3.6, 370.0], [3.7, 370.0], [3.8, 370.0], [3.9, 370.0], [4.0, 370.0], [4.1, 370.0], [4.2, 370.0], [4.3, 371.0], [4.4, 371.0], [4.5, 371.0], [4.6, 371.0], [4.7, 371.0], [4.8, 371.0], [4.9, 371.0], [5.0, 371.0], [5.1, 371.0], [5.2, 371.0], [5.3, 372.0], [5.4, 372.0], [5.5, 372.0], [5.6, 372.0], [5.7, 372.0], [5.8, 375.0], [5.9, 375.0], [6.0, 375.0], [6.1, 375.0], [6.2, 375.0], [6.3, 375.0], [6.4, 375.0], [6.5, 375.0], [6.6, 375.0], [6.7, 376.0], [6.8, 376.0], [6.9, 376.0], [7.0, 376.0], [7.1, 376.0], [7.2, 377.0], [7.3, 377.0], [7.4, 377.0], [7.5, 377.0], [7.6, 377.0], [7.7, 377.0], [7.8, 377.0], [7.9, 377.0], [8.0, 377.0], [8.1, 378.0], [8.2, 378.0], [8.3, 378.0], [8.4, 378.0], [8.5, 378.0], [8.6, 378.0], [8.7, 378.0], [8.8, 378.0], [8.9, 378.0], [9.0, 378.0], [9.1, 379.0], [9.2, 379.0], [9.3, 379.0], [9.4, 379.0], [9.5, 379.0], [9.6, 379.0], [9.7, 379.0], [9.8, 379.0], [9.9, 379.0], [10.0, 379.0], [10.1, 379.0], [10.2, 379.0], [10.3, 379.0], [10.4, 379.0], [10.5, 379.0], [10.6, 379.0], [10.7, 379.0], [10.8, 379.0], [10.9, 379.0], [11.0, 380.0], [11.1, 380.0], [11.2, 380.0], [11.3, 380.0], [11.4, 380.0], [11.5, 381.0], [11.6, 381.0], [11.7, 381.0], [11.8, 381.0], [11.9, 381.0], [12.0, 381.0], [12.1, 381.0], [12.2, 381.0], [12.3, 381.0], [12.4, 381.0], [12.5, 381.0], [12.6, 381.0], [12.7, 381.0], [12.8, 381.0], [12.9, 381.0], [13.0, 381.0], [13.1, 381.0], [13.2, 381.0], [13.3, 381.0], [13.4, 382.0], [13.5, 382.0], [13.6, 382.0], [13.7, 382.0], [13.8, 382.0], [13.9, 382.0], [14.0, 382.0], [14.1, 382.0], [14.2, 382.0], [14.3, 382.0], [14.4, 382.0], [14.5, 382.0], [14.6, 382.0], [14.7, 382.0], [14.8, 382.0], [14.9, 382.0], [15.0, 382.0], [15.1, 382.0], [15.2, 382.0], [15.3, 382.0], [15.4, 382.0], [15.5, 382.0], [15.6, 382.0], [15.7, 382.0], [15.8, 382.0], [15.9, 382.0], [16.0, 382.0], [16.1, 382.0], [16.2, 383.0], [16.3, 383.0], [16.4, 383.0], [16.5, 383.0], [16.6, 383.0], [16.7, 383.0], [16.8, 383.0], [16.9, 383.0], [17.0, 383.0], [17.1, 383.0], [17.2, 383.0], [17.3, 383.0], [17.4, 383.0], [17.5, 383.0], [17.6, 383.0], [17.7, 383.0], [17.8, 383.0], [17.9, 383.0], [18.0, 383.0], [18.1, 384.0], [18.2, 384.0], [18.3, 384.0], [18.4, 384.0], [18.5, 384.0], [18.6, 384.0], [18.7, 384.0], [18.8, 384.0], [18.9, 384.0], [19.0, 384.0], [19.1, 385.0], [19.2, 385.0], [19.3, 385.0], [19.4, 385.0], [19.5, 385.0], [19.6, 385.0], [19.7, 385.0], [19.8, 385.0], [19.9, 385.0], [20.0, 385.0], [20.1, 385.0], [20.2, 385.0], [20.3, 385.0], [20.4, 385.0], [20.5, 385.0], [20.6, 385.0], [20.7, 385.0], [20.8, 385.0], [20.9, 385.0], [21.0, 385.0], [21.1, 385.0], [21.2, 385.0], [21.3, 385.0], [21.4, 385.0], [21.5, 386.0], [21.6, 386.0], [21.7, 386.0], [21.8, 386.0], [21.9, 386.0], [22.0, 386.0], [22.1, 386.0], [22.2, 386.0], [22.3, 386.0], [22.4, 386.0], [22.5, 386.0], [22.6, 386.0], [22.7, 386.0], [22.8, 386.0], [22.9, 386.0], [23.0, 386.0], [23.1, 386.0], [23.2, 386.0], [23.3, 386.0], [23.4, 386.0], [23.5, 386.0], [23.6, 386.0], [23.7, 386.0], [23.8, 386.0], [23.9, 387.0], [24.0, 387.0], [24.1, 387.0], [24.2, 387.0], [24.3, 387.0], [24.4, 387.0], [24.5, 387.0], [24.6, 387.0], [24.7, 387.0], [24.8, 387.0], [24.9, 387.0], [25.0, 387.0], [25.1, 387.0], [25.2, 387.0], [25.3, 387.0], [25.4, 387.0], [25.5, 387.0], [25.6, 387.0], [25.7, 387.0], [25.8, 387.0], [25.9, 387.0], [26.0, 387.0], [26.1, 387.0], [26.2, 388.0], [26.3, 388.0], [26.4, 388.0], [26.5, 388.0], [26.6, 388.0], [26.7, 388.0], [26.8, 388.0], [26.9, 388.0], [27.0, 388.0], [27.1, 388.0], [27.2, 388.0], [27.3, 388.0], [27.4, 388.0], [27.5, 388.0], [27.6, 388.0], [27.7, 388.0], [27.8, 388.0], [27.9, 388.0], [28.0, 388.0], [28.1, 388.0], [28.2, 388.0], [28.3, 388.0], [28.4, 388.0], [28.5, 388.0], [28.6, 388.0], [28.7, 388.0], [28.8, 388.0], [28.9, 388.0], [29.0, 388.0], [29.1, 388.0], [29.2, 388.0], [29.3, 388.0], [29.4, 388.0], [29.5, 388.0], [29.6, 388.0], [29.7, 388.0], [29.8, 388.0], [29.9, 388.0], [30.0, 388.0], [30.1, 388.0], [30.2, 388.0], [30.3, 388.0], [30.4, 388.0], [30.5, 388.0], [30.6, 388.0], [30.7, 388.0], [30.8, 388.0], [30.9, 388.0], [31.0, 389.0], [31.1, 389.0], [31.2, 389.0], [31.3, 389.0], [31.4, 389.0], [31.5, 389.0], [31.6, 389.0], [31.7, 389.0], [31.8, 389.0], [31.9, 389.0], [32.0, 389.0], [32.1, 389.0], [32.2, 389.0], [32.3, 389.0], [32.4, 389.0], [32.5, 389.0], [32.6, 389.0], [32.7, 389.0], [32.8, 389.0], [32.9, 389.0], [33.0, 389.0], [33.1, 389.0], [33.2, 389.0], [33.3, 389.0], [33.4, 389.0], [33.5, 389.0], [33.6, 389.0], [33.7, 389.0], [33.8, 389.0], [33.9, 389.0], [34.0, 389.0], [34.1, 389.0], [34.2, 389.0], [34.3, 390.0], [34.4, 390.0], [34.5, 390.0], [34.6, 390.0], [34.7, 390.0], [34.8, 390.0], [34.9, 390.0], [35.0, 390.0], [35.1, 390.0], [35.2, 390.0], [35.3, 390.0], [35.4, 390.0], [35.5, 390.0], [35.6, 390.0], [35.7, 390.0], [35.8, 391.0], [35.9, 391.0], [36.0, 391.0], [36.1, 391.0], [36.2, 391.0], [36.3, 391.0], [36.4, 391.0], [36.5, 391.0], [36.6, 391.0], [36.7, 391.0], [36.8, 391.0], [36.9, 391.0], [37.0, 391.0], [37.1, 391.0], [37.2, 391.0], [37.3, 391.0], [37.4, 391.0], [37.5, 391.0], [37.6, 391.0], [37.7, 391.0], [37.8, 391.0], [37.9, 391.0], [38.0, 391.0], [38.1, 392.0], [38.2, 392.0], [38.3, 392.0], [38.4, 392.0], [38.5, 392.0], [38.6, 392.0], [38.7, 392.0], [38.8, 392.0], [38.9, 392.0], [39.0, 392.0], [39.1, 393.0], [39.2, 393.0], [39.3, 393.0], [39.4, 393.0], [39.5, 393.0], [39.6, 393.0], [39.7, 393.0], [39.8, 393.0], [39.9, 393.0], [40.0, 393.0], [40.1, 393.0], [40.2, 393.0], [40.3, 393.0], [40.4, 393.0], [40.5, 394.0], [40.6, 394.0], [40.7, 394.0], [40.8, 394.0], [40.9, 394.0], [41.0, 394.0], [41.1, 394.0], [41.2, 394.0], [41.3, 394.0], [41.4, 394.0], [41.5, 395.0], [41.6, 395.0], [41.7, 395.0], [41.8, 395.0], [41.9, 395.0], [42.0, 395.0], [42.1, 395.0], [42.2, 395.0], [42.3, 395.0], [42.4, 395.0], [42.5, 395.0], [42.6, 395.0], [42.7, 395.0], [42.8, 395.0], [42.9, 395.0], [43.0, 395.0], [43.1, 395.0], [43.2, 395.0], [43.3, 395.0], [43.4, 396.0], [43.5, 396.0], [43.6, 396.0], [43.7, 396.0], [43.8, 396.0], [43.9, 396.0], [44.0, 396.0], [44.1, 396.0], [44.2, 396.0], [44.3, 396.0], [44.4, 396.0], [44.5, 396.0], [44.6, 396.0], [44.7, 396.0], [44.8, 397.0], [44.9, 397.0], [45.0, 397.0], [45.1, 397.0], [45.2, 397.0], [45.3, 397.0], [45.4, 397.0], [45.5, 397.0], [45.6, 397.0], [45.7, 397.0], [45.8, 397.0], [45.9, 397.0], [46.0, 397.0], [46.1, 397.0], [46.2, 397.0], [46.3, 397.0], [46.4, 397.0], [46.5, 397.0], [46.6, 397.0], [46.7, 397.0], [46.8, 397.0], [46.9, 397.0], [47.0, 397.0], [47.1, 397.0], [47.2, 397.0], [47.3, 397.0], [47.4, 397.0], [47.5, 397.0], [47.6, 397.0], [47.7, 398.0], [47.8, 398.0], [47.9, 398.0], [48.0, 398.0], [48.1, 398.0], [48.2, 398.0], [48.3, 398.0], [48.4, 398.0], [48.5, 398.0], [48.6, 398.0], [48.7, 398.0], [48.8, 398.0], [48.9, 398.0], [49.0, 398.0], [49.1, 398.0], [49.2, 398.0], [49.3, 398.0], [49.4, 398.0], [49.5, 398.0], [49.6, 398.0], [49.7, 398.0], [49.8, 398.0], [49.9, 398.0], [50.0, 398.0], [50.1, 398.0], [50.2, 398.0], [50.3, 398.0], [50.4, 398.0], [50.5, 398.0], [50.6, 398.0], [50.7, 398.0], [50.8, 398.0], [50.9, 398.0], [51.0, 398.0], [51.1, 398.0], [51.2, 398.0], [51.3, 398.0], [51.4, 398.0], [51.5, 398.0], [51.6, 398.0], [51.7, 398.0], [51.8, 398.0], [51.9, 398.0], [52.0, 398.0], [52.1, 398.0], [52.2, 398.0], [52.3, 398.0], [52.4, 399.0], [52.5, 399.0], [52.6, 399.0], [52.7, 399.0], [52.8, 399.0], [52.9, 399.0], [53.0, 399.0], [53.1, 399.0], [53.2, 399.0], [53.3, 399.0], [53.4, 399.0], [53.5, 399.0], [53.6, 399.0], [53.7, 399.0], [53.8, 399.0], [53.9, 399.0], [54.0, 399.0], [54.1, 399.0], [54.2, 399.0], [54.3, 400.0], [54.4, 400.0], [54.5, 400.0], [54.6, 400.0], [54.7, 400.0], [54.8, 400.0], [54.9, 400.0], [55.0, 400.0], [55.1, 400.0], [55.2, 400.0], [55.3, 400.0], [55.4, 400.0], [55.5, 400.0], [55.6, 400.0], [55.7, 400.0], [55.8, 400.0], [55.9, 400.0], [56.0, 400.0], [56.1, 400.0], [56.2, 400.0], [56.3, 400.0], [56.4, 400.0], [56.5, 400.0], [56.6, 400.0], [56.7, 400.0], [56.8, 400.0], [56.9, 400.0], [57.0, 400.0], [57.1, 400.0], [57.2, 401.0], [57.3, 401.0], [57.4, 401.0], [57.5, 401.0], [57.6, 401.0], [57.7, 401.0], [57.8, 401.0], [57.9, 401.0], [58.0, 401.0], [58.1, 401.0], [58.2, 401.0], [58.3, 401.0], [58.4, 401.0], [58.5, 401.0], [58.6, 401.0], [58.7, 401.0], [58.8, 401.0], [58.9, 401.0], [59.0, 401.0], [59.1, 402.0], [59.2, 402.0], [59.3, 402.0], [59.4, 402.0], [59.5, 402.0], [59.6, 402.0], [59.7, 402.0], [59.8, 402.0], [59.9, 402.0], [60.0, 402.0], [60.1, 402.0], [60.2, 402.0], [60.3, 402.0], [60.4, 402.0], [60.5, 404.0], [60.6, 404.0], [60.7, 404.0], [60.8, 404.0], [60.9, 404.0], [61.0, 404.0], [61.1, 404.0], [61.2, 404.0], [61.3, 404.0], [61.4, 404.0], [61.5, 404.0], [61.6, 404.0], [61.7, 404.0], [61.8, 404.0], [61.9, 404.0], [62.0, 404.0], [62.1, 404.0], [62.2, 404.0], [62.3, 404.0], [62.4, 404.0], [62.5, 404.0], [62.6, 404.0], [62.7, 404.0], [62.8, 404.0], [62.9, 404.0], [63.0, 404.0], [63.1, 404.0], [63.2, 404.0], [63.3, 404.0], [63.4, 404.0], [63.5, 404.0], [63.6, 404.0], [63.7, 404.0], [63.8, 404.0], [63.9, 404.0], [64.0, 404.0], [64.1, 404.0], [64.2, 404.0], [64.3, 404.0], [64.4, 404.0], [64.5, 404.0], [64.6, 404.0], [64.7, 404.0], [64.8, 405.0], [64.9, 405.0], [65.0, 405.0], [65.1, 405.0], [65.2, 405.0], [65.3, 405.0], [65.4, 405.0], [65.5, 405.0], [65.6, 405.0], [65.7, 405.0], [65.8, 405.0], [65.9, 405.0], [66.0, 405.0], [66.1, 405.0], [66.2, 406.0], [66.3, 406.0], [66.4, 406.0], [66.5, 406.0], [66.6, 406.0], [66.7, 406.0], [66.8, 406.0], [66.9, 406.0], [67.0, 406.0], [67.1, 406.0], [67.2, 407.0], [67.3, 407.0], [67.4, 407.0], [67.5, 407.0], [67.6, 407.0], [67.7, 407.0], [67.8, 407.0], [67.9, 407.0], [68.0, 407.0], [68.1, 407.0], [68.2, 407.0], [68.3, 407.0], [68.4, 407.0], [68.5, 407.0], [68.6, 408.0], [68.7, 408.0], [68.8, 408.0], [68.9, 408.0], [69.0, 408.0], [69.1, 408.0], [69.2, 408.0], [69.3, 408.0], [69.4, 408.0], [69.5, 408.0], [69.6, 409.0], [69.7, 409.0], [69.8, 409.0], [69.9, 409.0], [70.0, 409.0], [70.1, 409.0], [70.2, 409.0], [70.3, 409.0], [70.4, 409.0], [70.5, 409.0], [70.6, 409.0], [70.7, 409.0], [70.8, 409.0], [70.9, 409.0], [71.0, 410.0], [71.1, 410.0], [71.2, 410.0], [71.3, 410.0], [71.4, 410.0], [71.5, 410.0], [71.6, 410.0], [71.7, 410.0], [71.8, 410.0], [71.9, 410.0], [72.0, 410.0], [72.1, 410.0], [72.2, 410.0], [72.3, 410.0], [72.4, 411.0], [72.5, 411.0], [72.6, 411.0], [72.7, 411.0], [72.8, 411.0], [72.9, 411.0], [73.0, 411.0], [73.1, 411.0], [73.2, 411.0], [73.3, 411.0], [73.4, 412.0], [73.5, 412.0], [73.6, 412.0], [73.7, 412.0], [73.8, 412.0], [73.9, 412.0], [74.0, 412.0], [74.1, 412.0], [74.2, 412.0], [74.3, 413.0], [74.4, 413.0], [74.5, 413.0], [74.6, 413.0], [74.7, 413.0], [74.8, 413.0], [74.9, 413.0], [75.0, 413.0], [75.1, 413.0], [75.2, 413.0], [75.3, 413.0], [75.4, 413.0], [75.5, 413.0], [75.6, 413.0], [75.7, 413.0], [75.8, 414.0], [75.9, 414.0], [76.0, 414.0], [76.1, 414.0], [76.2, 414.0], [76.3, 414.0], [76.4, 414.0], [76.5, 414.0], [76.6, 414.0], [76.7, 414.0], [76.8, 414.0], [76.9, 414.0], [77.0, 414.0], [77.1, 414.0], [77.2, 414.0], [77.3, 414.0], [77.4, 414.0], [77.5, 414.0], [77.6, 414.0], [77.7, 415.0], [77.8, 415.0], [77.9, 415.0], [78.0, 415.0], [78.1, 415.0], [78.2, 415.0], [78.3, 415.0], [78.4, 415.0], [78.5, 415.0], [78.6, 415.0], [78.7, 415.0], [78.8, 415.0], [78.9, 415.0], [79.0, 415.0], [79.1, 416.0], [79.2, 416.0], [79.3, 416.0], [79.4, 416.0], [79.5, 416.0], [79.6, 416.0], [79.7, 416.0], [79.8, 416.0], [79.9, 416.0], [80.0, 417.0], [80.1, 417.0], [80.2, 417.0], [80.3, 417.0], [80.4, 417.0], [80.5, 417.0], [80.6, 417.0], [80.7, 417.0], [80.8, 417.0], [80.9, 417.0], [81.0, 418.0], [81.1, 418.0], [81.2, 418.0], [81.3, 418.0], [81.4, 418.0], [81.5, 418.0], [81.6, 418.0], [81.7, 418.0], [81.8, 418.0], [81.9, 418.0], [82.0, 419.0], [82.1, 419.0], [82.2, 419.0], [82.3, 419.0], [82.4, 421.0], [82.5, 421.0], [82.6, 421.0], [82.7, 421.0], [82.8, 421.0], [82.9, 422.0], [83.0, 422.0], [83.1, 422.0], [83.2, 422.0], [83.3, 422.0], [83.4, 424.0], [83.5, 424.0], [83.6, 424.0], [83.7, 424.0], [83.8, 424.0], [83.9, 425.0], [84.0, 425.0], [84.1, 425.0], [84.2, 425.0], [84.3, 426.0], [84.4, 426.0], [84.5, 426.0], [84.6, 426.0], [84.7, 426.0], [84.8, 428.0], [84.9, 428.0], [85.0, 428.0], [85.1, 428.0], [85.2, 428.0], [85.3, 447.0], [85.4, 447.0], [85.5, 447.0], [85.6, 447.0], [85.7, 447.0], [85.8, 450.0], [85.9, 450.0], [86.0, 450.0], [86.1, 450.0], [86.2, 460.0], [86.3, 460.0], [86.4, 460.0], [86.5, 460.0], [86.6, 460.0], [86.7, 463.0], [86.8, 463.0], [86.9, 463.0], [87.0, 463.0], [87.1, 463.0], [87.2, 478.0], [87.3, 478.0], [87.4, 478.0], [87.5, 478.0], [87.6, 478.0], [87.7, 486.0], [87.8, 486.0], [87.9, 486.0], [88.0, 486.0], [88.1, 503.0], [88.2, 503.0], [88.3, 503.0], [88.4, 503.0], [88.5, 503.0], [88.6, 503.0], [88.7, 503.0], [88.8, 503.0], [88.9, 503.0], [89.0, 503.0], [89.1, 508.0], [89.2, 508.0], [89.3, 508.0], [89.4, 508.0], [89.5, 508.0], [89.6, 511.0], [89.7, 511.0], [89.8, 511.0], [89.9, 511.0], [90.0, 511.0], [90.1, 515.0], [90.2, 515.0], [90.3, 515.0], [90.4, 515.0], [90.5, 515.0], [90.6, 515.0], [90.7, 515.0], [90.8, 515.0], [90.9, 515.0], [91.0, 523.0], [91.1, 523.0], [91.2, 523.0], [91.3, 523.0], [91.4, 523.0], [91.5, 533.0], [91.6, 533.0], [91.7, 533.0], [91.8, 533.0], [91.9, 533.0], [92.0, 555.0], [92.1, 555.0], [92.2, 555.0], [92.3, 555.0], [92.4, 683.0], [92.5, 683.0], [92.6, 683.0], [92.7, 683.0], [92.8, 683.0], [92.9, 705.0], [93.0, 705.0], [93.1, 705.0], [93.2, 705.0], [93.3, 705.0], [93.4, 720.0], [93.5, 720.0], [93.6, 720.0], [93.7, 720.0], [93.8, 720.0], [93.9, 784.0], [94.0, 784.0], [94.1, 784.0], [94.2, 784.0], [94.3, 789.0], [94.4, 789.0], [94.5, 789.0], [94.6, 789.0], [94.7, 789.0], [94.8, 790.0], [94.9, 790.0], [95.0, 790.0], [95.1, 790.0], [95.2, 790.0], [95.3, 798.0], [95.4, 798.0], [95.5, 798.0], [95.6, 798.0], [95.7, 798.0], [95.8, 836.0], [95.9, 836.0], [96.0, 836.0], [96.1, 836.0], [96.2, 895.0], [96.3, 895.0], [96.4, 895.0], [96.5, 895.0], [96.6, 895.0], [96.7, 896.0], [96.8, 896.0], [96.9, 896.0], [97.0, 896.0], [97.1, 896.0], [97.2, 907.0], [97.3, 907.0], [97.4, 907.0], [97.5, 907.0], [97.6, 907.0], [97.7, 957.0], [97.8, 957.0], [97.9, 957.0], [98.0, 957.0], [98.1, 1026.0], [98.2, 1026.0], [98.3, 1026.0], [98.4, 1026.0], [98.5, 1026.0], [98.6, 1252.0], [98.7, 1252.0], [98.8, 1252.0], [98.9, 1252.0], [99.0, 1252.0], [99.1, 1386.0], [99.2, 1386.0], [99.3, 1386.0], [99.4, 1386.0], [99.5, 1386.0], [99.6, 1452.0], [99.7, 1452.0], [99.8, 1452.0], [99.9, 1452.0], [100.0, 1452.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 110.0, "series": [{"data": [[1200.0, 1.0], [300.0, 110.0], [600.0, 1.0], [1300.0, 1.0], [700.0, 6.0], [1400.0, 1.0], [400.0, 71.0], [200.0, 4.0], [800.0, 3.0], [900.0, 2.0], [1000.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 25.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 185.0, "series": [{"data": [[0.0, 185.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.9, "minX": 1.76785536E12, "maxY": 8.375000000000002, "series": [{"data": [[1.76785536E12, 8.375000000000002]], "isOverall": false, "label": "Thread Group - GET List", "isController": false}, {"data": [[1.76785536E12, 1.9]], "isOverall": false, "label": "Thread Group - POST Login", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76785536E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 370.1666666666667, "minX": 1.0, "maxY": 530.4444444444443, "series": [{"data": [[8.0, 402.2727272727273], [4.0, 398.0], [2.0, 411.6666666666667], [1.0, 398.0], [9.0, 439.31250000000006], [5.0, 520.9285714285714], [10.0, 425.98319327731105], [11.0, 370.1666666666667], [6.0, 530.4444444444443], [3.0, 400.44444444444446], [7.0, 505.7619047619047]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[8.557142857142864, 441.3809523809525]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 11.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1237.6666666666667, "minX": 1.76785536E12, "maxY": 3008.8333333333335, "series": [{"data": [[1.76785536E12, 3008.8333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76785536E12, 1237.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76785536E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 441.3809523809525, "minX": 1.76785536E12, "maxY": 441.3809523809525, "series": [{"data": [[1.76785536E12, 441.3809523809525]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76785536E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 440.97142857142836, "minX": 1.76785536E12, "maxY": 440.97142857142836, "series": [{"data": [[1.76785536E12, 440.97142857142836]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76785536E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 20.6952380952381, "minX": 1.76785536E12, "maxY": 20.6952380952381, "series": [{"data": [[1.76785536E12, 20.6952380952381]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76785536E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 278.0, "minX": 1.76785536E12, "maxY": 1452.0, "series": [{"data": [[1.76785536E12, 1452.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76785536E12, 514.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76785536E12, 1371.2599999999982]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76785536E12, 793.5999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76785536E12, 278.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76785536E12, 398.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76785536E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 388.0, "minX": 3.0, "maxY": 410.0, "series": [{"data": [[17.0, 399.0], [20.0, 403.0], [21.0, 388.0], [3.0, 410.0], [24.0, 396.0], [13.0, 396.0], [26.0, 397.0], [7.0, 405.0], [15.0, 399.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 388.0, "minX": 3.0, "maxY": 410.0, "series": [{"data": [[17.0, 399.0], [20.0, 403.0], [21.0, 388.0], [3.0, 410.0], [24.0, 395.5], [13.0, 396.0], [26.0, 397.0], [7.0, 405.0], [15.0, 399.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.5, "minX": 1.76785536E12, "maxY": 3.5, "series": [{"data": [[1.76785536E12, 3.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76785536E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.5, "minX": 1.76785536E12, "maxY": 3.5, "series": [{"data": [[1.76785536E12, 3.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76785536E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.5, "minX": 1.76785536E12, "maxY": 3.5, "series": [{"data": [[1.76785536E12, 3.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76785536E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.5, "minX": 1.76785536E12, "maxY": 3.5, "series": [{"data": [[1.76785536E12, 3.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76785536E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

