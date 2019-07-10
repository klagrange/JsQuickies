function cleanObj(a, l) {
  return Object.keys(a).reduce(
  (acc, k) => {
  if (['id'].concat(l).includes(k)) {
      return acc;
  }

  if (Array.isArray(a[k])) {
      const clean = a[k].map((a) => {
      return cleanObj(a, l);
      });
      const h = {};
      h[k] = clean;
      return { ...acc, ...h };
  }

  if (a[k] && typeof a[k] === 'object' && Object.keys(a[k]).length !== 0) {
      const h = {};
      h[k] = cleanObj(a[k], l);
      return { ...acc, ...h };
  }

  const h = {};
  h[k] = a[k];
  return { ...acc, ...h };
  },
  {});
  }
  
function removeIdsWithOpts(a, l) {
  if (Array.isArray(a)) {
    return a.map((a) => {
      return removeIdsWithOpts(a, l);
    });
  }
  return cleanObj(a, l);
}

function clean(a) {
  return removeIdsWithOpts(a, ['riskId']);
}

const res = clean({
  id: 1, 
  a: {
    b: {
      c: [
        { id: 1, keep: 1 },
        { id: 2, keep: 2 },
        { id: 3, keep: 3 } 
      ]
    }
  }
})

console.log(res);
console.log(res['a']['b']['c']);