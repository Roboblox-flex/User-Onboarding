describe("Inputs", () => {
  it("Can type in a name", () => {
    cy.get('input[name="name"]').type("george").should("have.value", "george");
  });
  it("Can type in an email", () => {
    cy.get('input[name="email"]')
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
  it("Can type in an password", () => {
    cy.get('input[name="password"]')
      .type("12345678")
      .should("have.value", "12345678");
  });
  it("Can get terms", () => {
    cy.get("input[name=terms]").check().should("be.checked");
  });
  it("Submit Button enabled", () => {
    cy.get("button").should("be.enabled").click();
  });
  it("Form clears after submit", () => {
    cy.get("input[name=name]").should("be.empty");
  });
});

// write tests here
// describe('Inputs and submit button', () => {
//     it('can navigate to the site', () => {
//       // this is setup for the actual test
//       cy.visit('http://localhost:1234')
//       // assert that the site we landed at is the correct one
//       cy.url().should('include', 'localhost')
//     })

//     it('submit button is disabled', () => {
//       // grab the element
//       // check that it's actually disabled
//       cy.get('#submitBtn').should('be.disabled')
//     })

//     it('can type a text for a new quote', () => {
//       // grab element (in itself is a test)
//       // type something with cy
//       // assert that the value of the input is the thing we typed
//       cy.get('input[name="text"]')
//         .type('Have Fun!')
//         .should('have.value', 'Have Fun!')
//     })

//     it("Can type in an author", () => {
//       cy.get('input[name="author"]')
//         .type("My new author")
//         .should('have.value', "My new author")
//     })

//     it('the submit button is not disabled any more', () => {
//       cy.get('#submitBtn').should('not.be.disabled')
//     })

//     it('can cancel the new quote', () => {
//       // grab the submit button
//       // click the submit button
//       // assert the inputs are back to blank and the button back to disabled
//       cy.get('#cancelBtn').click()

//       cy.get('input[name="text"]').should('have.value', '')    // assertion 1
//       cy.get('input[name="author"]').should('have.value', '')  // assertion 2
//       cy.get('#submitBtn').should('be.disabled')               // assertion 3
//     })
//   })

//   describe('Adding and deleting a new quote', () => {
//     it('can navigate to the site', () => {
//       // repeat minus the check
//       cy.visit('http://localhost:1234')
//     })

//     it('can submit a quote', () => {
//       // filling out the form and submit it
//       // assert that a quote with the given text and author are in the DOM
//       cy.get('input[name="text"]').type('Have Fun!')
//       cy.get('input[name="author"]').type('Gabe')
//       // cy.pause()
//       cy.get('#submitBtn').click()
//       cy.get(".container").contains('Have Fun!')
//     })

//     it('can delete the newly added quote', () => {
//       // find the delete button of the quote, click it,
//       // assert that the contents are not in there any more
//       cy.contains('Have Fun! (Gabe)').siblings('button:nth-of-type(2)').click()
//       cy.contains('Have Fun! (Gabe)').should('not.exist')
//     })
//   })

//   describe('Editing a quote', () => {
//     // navigate
//     // add a new one
//     // edit the new one, checking the author and/or text changes
//     // edit it back
//     // delete
