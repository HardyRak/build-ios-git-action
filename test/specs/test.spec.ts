describe("Test de connexion", () => {
  before(() => {
    browser.url("app://com.example.android");
  });

  it("devrait détecter les champs email et mot de passe", async () => {
    const emailInput = $("~email");
    await emailInput.waitForExist( 5000 );

    const passwordInput =  $("~password");
    await passwordInput.waitForExist( 5000 );

    expect(await emailInput.isExisting()).toBeTruthy();
    expect(await passwordInput.isExisting()).toBeTruthy();
});


  // it("devrait remplir et soumettre le formulaire", async () => {
  //   const emailInput = await $("~email");
  //   const passwordInput = await $("~password");
  //   const loginButton = await $("~login-button");

  //   await emailInput.setValue("bob@example.com");
  //   await passwordInput.setValue("10203040");
  //   await loginButton.click();

  //   const errorMessage = await $("~error-message");
  //   const homePage = await $("~home");

  //   // Vérifie si la connexion est réussie ou échouée
  //   const isErrorVisible = await errorMessage.isDisplayed();
  //   if (isErrorVisible) {
  //     console.log("Erreur affichée :", await errorMessage.getText());
  //     expect(isErrorVisible).toBeTruthy();
  //   } else {
  //     await homePage.waitForDisplayed({ timeout: 5000 });
  //     expect(await homePage.isExisting()).toBeTruthy();
  //   }
  // });
});
