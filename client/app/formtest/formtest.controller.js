(function() {
'use strict';


/*
  

  app.controller('MainCtrl', function MainCtrl(formlyVersion) {
    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = {
      name: 'Kent C. Dodds',
      url: 'https://twitter.com/kentcdodds'
    };
    vm.exampleTitle = 'Table Rows';
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };

    vm.model = {};
    
    vm.fields = [
      {
        key: 'text',
        type: 'textarea',
        templateOptions: {
          label: 'Textarea with specified rows',
          placeholder: 'This has 10 rows',
          rows: 10
        }
      }
    ];
    
    vm.originalFields = angular.copy(vm.fields);

    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
    }
  });

})();




*/

/* from another example */
/* global angular */
/*
(function() {
  
  'use strict';

  var app = angular.module('formlyExample', ['formly', 'formlyBootstrap']);
  

  app.controller('MainCtrl', function MainCtrl(formlyVersion, $timeout) {
    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Kent C.',
      url: 'Dodds' // a link to your twitter/github/blog/whatever
    };
    vm.exampleTitle = 'model property'; // add this
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };

    vm.model = {
      name: {
        first: 'Gandalf',
        last: 'The Gray'
      },
      email: 'gandalf@example.com',
      username: 'yoiamgandalf'
    };
    
    vm.fields = [
      {
        key: 'first',
        type: 'input',
        model: vm.model.name,
        templateOptions: {
          label: 'First Name'
        }
      },
      {
        key: 'last',
        type: 'input',
        model: vm.model.name,
        templateOptions: {
          label: 'Last Name'
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email Address',
          type: 'email'
        }
      },
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'Username'
        }
      },
      {
        key: 'other',
        type: 'input',
        templateOptions: {
          label: 'Other model'
        },
        expressionProperties: {
          'templateOptions.disabled': '!options.data.modelLoaded'
        },
        data: {
          modelLoaded: false
        }
      }
    ];
    
    $timeout(function() {
    }, 1000).then(function() {
      var field = vm.fields[4];
      console.log('hi');
      field.model = {
        other: 'some value'
      };
      field.data.modelLoaded = true;
      field.runExpressions(); // re-run the expression properties
    });
    
    vm.originalFields = angular.copy(vm.fields);

    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
    }
  });

})();
*/
angular.module('workspaceApp')
  .controller('FormtestCtrl', ['$log', 'formlyVersion', 'COLORS',
    function ($log, formlyVersion, COLORS) {
      var vm = this;
      /**
       * logging the vm.docname is for debugging purposes and 
       * possible information to show in a view
       */
      vm.docname = 'formtest.controller';
      $log.log(vm.docname, 'entering this function');
      $log.log('COLORS[0].color is',COLORS[0].color);
      $log.log(COLORS);
      //do not remove these commented out lines unless you have this memorized
      //or elsewhere
      //$log.log(vm.docname, 'entering this function', $state.current.name,  
      //JSON.stringify($stateParams), $state.$current.url.source);
      vm.formData = {};
      vm.formData.color = '';
      vm.formData.email = '';
      vm.formData.confirmEmail = '';
      vm.formData.text = 'Lorem ipsum dolor sit amet, porta tellus hendrerit, eu sed fusce, ipsum sed sociis. Augue rutrum, pellentesque iaculis. Bibendum scelerisque, molestie sagittis augue, ultricies ligula nec. Tortor facilisis.';
      vm.formFields = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email'
        }
      },
      {
        key: 'confirmEmail',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Confirm email address',
          required: true,
          placeholder: 'Confirm email address'
        },
        validators: {
          matchesBetter: {
            expression: '$viewValue === model.email',
            message: '$viewValue + " is not " + model.email'
          }
        },
        watcher: {
          expression: 'model.email',
          listener: function(field) {
            field.formControl && field.formControl.$validate();
          }
        }
      },
      {
        type: 'select',
        key: 'color',
        templateOptions: {
          label: 'Colors',
          required: true,
          options: COLORS
        }
      },
            {
        key: 'text',
        type: 'textarea',
        templateOptions: {
          label: 'Textarea with specified rows',
          placeholder: 'This has 10 rows',
          rows: 10
        }
      }
      ];
      vm.handleSubmit = function() {
        $log.log('in handleSubmit()');
        alert(JSON.stringify(vm.formData), null, 2);
      };
      /*
      vm.user = {};
      vm.user.email = 'a@b.com';
      vm.user.password = '';
      vm.userFields = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email'
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        }
      },
      {
        key: 'file',
        type: 'file',
        templateOptions: {
          label: 'File input',
          description: 'Example block-level help text here',
          url: 'https://example.com/upload'
        }
      },
      {
        key: 'checked',
        type: 'checkbox',
        templateOptions: {
          label: 'Check me out'
        }
      }
      ];
      */
      $log.log(vm.docname, 'leaving this function with vm.formData', JSON.stringify(vm.formData));
    }]);

// angular.module('workspaceApp')
//   .constant('COLORSTOO', [{"color": "red"}, {"color": "green"}, {"color": "blue"}, {"color": "cyan"}, 
//   {"color": "magenta"}, {"color": "yellow"}, {"color": "black"}]);
    
angular.module('workspaceApp')
  .constant('COLORS', [
	{
		name: "red",
		value: "#f00"
	},
	{
		name: "green",
		value: "#0f0"
	},
	{
		name: "blue",
		value: "#00f"
	},
	{
		name: "cyan",
		value: "#0ff"
	},
	{
		name: "magenta",
		value: "#f0f"
	},
	{
		name: "yellow",
		value: "#ff0"
	},
	{
		name: "black",
		value: "#000"
	}
]);
    
}());