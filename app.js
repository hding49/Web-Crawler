const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Job = require('./model');

const data = [];

mongoose
  .connect('mongodb+srv://haoran:hding49@cluster0.l94hk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => {
    console.log('database connection successfully');
  })
  .catch(error => {
    console.log('database connection error');
  });


for (i =0; i<380; i+=10)
{
    axios.get('https://ca.indeed.com/jobs?q=web+developer&l=Ontario&start=' + i).then((res) => {

    const $ = cheerio.load(res.data);

    $('#resultsCol').each((index, element) => {

        for(j=0; j<15; j++)
        {
            const title = $(element).find('.title a').eq(j).text();
            const company = $(element).find('.sjcl div span.company').eq(j).text();
            const summary = $(element).find('.summary').eq(j).text();

            var job = new Job({
                title: title,
                company: company,
                summary: summary,
            })

            job.save(function(err) {
                if (err) {
                    console.log('error')
                    return;
                }   
                console.log('success')                                                            
            })
          
        }
        
      });

         
})

}