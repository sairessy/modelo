class Util {
  keep_api_awake(url) {
    setInterval(async () => {
      const res = await fetch(url);
      const json = await res.json();
    }, 60000);
  }
}

export default Util;
