'use strict';
const numChildren = [1, 4, 3, 5, 7];
const partnerNames = ['Naya', 'Zara', 'Kasem', 'Zlatan', 'Sara'];
const locations = ['Netherlands', 'Syria', 'Canada', 'China', 'Bosnia'];
const jobs = ['Programmer', 'president', 'Artist', 'Chef', 'police officer'];

function tellFortune(childnum, partname, locat, job) {
  let randomChildren = childnum[Math.floor(Math.random() * childnum.length)];
  let randomPartner = partname[Math.floor(Math.random() * partname.length)];
  let randomLocation = locat[Math.floor(Math.random() * locat.length)];
  let randomJob = job[Math.floor(Math.random() * job.length)];
  return console.log(
    `"You will be a ${randomJob} in ${randomLocation}, married to ${randomPartner} with ${randomChildren} kids."`
  );
}

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
