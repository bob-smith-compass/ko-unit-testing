
/** Unit tests run but no result is shown after Knockout code is introdued */
define(['knockout'], function(ko){
    var ViewModel = function (first, last) {
        this.firstName = ko.observable(first);
        this.lastName = ko.observable(last);
      
        this.fullName = ko.pureComputed(function () {
          // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
          return this.firstName() + " " + this.lastName();
        }, this);
      };
      
      ko.applyBindings(new ViewModel("David", "Shams")); // This makes Knockout get to work
      
      describe("Knockout Unit Testing", function () {
        beforeEach(function () {
          newEntryFirstName = ko.observable('David');
          newEntryLastName = ko.observable('Shams');
          list = ko.observableArray([]);
        });
        it("Frist name should be David, last name should be Shams", function () {
          expect(newEntryFirstName).toBe("David");
          expect(newEntryLastName).toBe("Shams");
        })
      })
})
