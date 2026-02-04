function getTime(time){
  const hour=parseInt(time / 3600);
  let remainSecond=(time % 3600);
  const minute=parseInt(remainSecond /60);
  remainSecond=remainSecond % 60;
 return `${hour} hour ${minute} minute ${remainSecond} second ago`
}

const time=getTime(7865)
console.log(time)