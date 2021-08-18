const rp = require("request-promise");
const cheerio = require("cheerio");

const weekday = "mon";
const options = {
  uri: `https://comic.naver.com/webtoon/weekdayList?week=${weekday}`,
  transform: function (body) {
    return cheerio.load(body);
  },
};
const getData = async () => {
  try {
    const $ = await rp(options);

    const topTensNames = [];
    const topTensPaths = [];
    const topTensJson = {};
    const items = $(".img_list > li > dl > dt > a");
    for (let i = 0; i < 10; i++) {
      topTensNames.push(items[i].attribs.title);
    //   topTensPaths.push(items[i].attribs.href);
    }

    console.log(topTensNames);
    console.log(topTensPaths);

    return;
  } catch (err) {
    console.error(err);
  }
};

getData();

//     request(url, function(error, response, body){
//     let resultArr = [];

//     const $ = cheerio.load(body);
//     let colArr = $(".tit3")
//     for(let i = 0; i < colArr.length; i++){
//       resultArr.push(colArr[i].children[1].attribs.title)
//     }

//     res.json(resultArr)
//   });
// })

// module.exports = router;
