window.onload = async () => {
  Wized.request.await("Load Users", (response) => {
    const snapshot = response.data;
    if(snapshot.Stripe == "Not Verified") {
      window.location.href = "/program-selection";
    }
  });
};
