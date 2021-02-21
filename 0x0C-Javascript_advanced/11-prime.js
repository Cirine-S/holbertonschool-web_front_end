function countPrimeNumbers() {
	let primes = 0;
	let isprime = true;
	for (let counter = 2; counter <= 100; counter = counter + 1) {
	  isprime = true;
	  let limit = Math.round(Math.sqrt(counter));
	  for (let mod = 2; mod <= limit; mod++) {
		if (counter % mod == 0) {
		  isprime = false;
		  break;
		}
	  }
  
	  if (isprime) {
		primes = primes + 1;
	  }
	}
	return primes;
  }
  
  let start = performance.now();
  
  (setTimeout = () => {
	for (let i = 1; i <= 100; i++) {
	  countPrimeNumbers();
	}
  }),
	0;
  
  let end = performance.now();
  console.log(
	"Execution time of calculating prime numbers 100 times was " +
	  (end - start) +
	  " milliseconds."
  );