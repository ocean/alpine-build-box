(function ($, Drupal, window, document) {

  var person = {
    "1":{"gender":"male","name":{"title":"Mr","first":"Nathan","last":"Fahey"},"location":{"address":"18 Moores Drive","suburb":"KINGS PARK","state":"WA","postcode":6005,"country":"Australia","long":100,"lat":-31.89518},"email":"nathan.fahey@example.com","dob":-16176014},
    "2":{"gender":"female","name":{"title":"Mrs","first":"Madison","last":"Farrell"},"location":{"address":"92 Chatsworth Drive","suburb":"BEDFORDALE","state":"WA","postcode":6112,"country":"Australia","long":100,"lat":-32.266884},"email":"madison.farrell@example.com","dob":968073119},
    "3":{"gender":"female","name":{"title":"Ms","first":"Charli","last":"Mclaughlin"},"location":{"address":"62 Daly Terrace","suburb":"CLARKSON","state":"WA","postcode":6030,"country":"Australia","long":100,"lat":-31.682005},"email":"charli.mclaughlin@example.com","dob":-561106756},
    "4":{"gender":"female","name":{"title":"Mrs","first":"Amber","last":"Bartoletti"},"location":{"address":"44 Point Walter Road","suburb":"SOUTH FREMANTLE","state":"WA","postcode":6162,"country":"Australia","long":100,"lat":-32.071918},"email":"amber.bartoletti@example.com","dob":615365240},
  };

  rand = Math.floor(Math.random() * 4 + 1);
  data = person[rand];

  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  consumerComplaintData = {
    add: function() {

      // $('.form-item input').not('input[type="radio"],input[type="button"], input[type="submit"], input[type="reset"], input[type="hidden"], input[type="checkbox"]').val('wooooooooo');
      // $('.form-item :input').not(':button, :submit, :reset, :hidden, :checkbox, :radio, :file').val('wooooooooo');
      // Page 2

      // $('#edit-submitted-getting-started-what-did-they-offer-to-do').val('Sed ut congue justo. Vivamus vestibulum suscipit erat. Cras eleifend vehicula faucibus.');
      // $('#edit-submitted-getting-started-is-there-a-reason-you-could-not-contact-the-other-party-or-resolve-the-dispute').val('Sed ut congue justo. Vivamus vestibulum suscipit erat. Cras eleifend vehicula faucibus.');
      // $('#edit-submitted-getting-started-what-was-the-outcome-of-that-complaint').val('Sed ut congue justo. Vivamus vestibulum suscipit erat. Cras eleifend vehicula faucibus.');

      // Page 4
      $('input[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][goods_or_services]"]').val('LG 65UF770T 55" 4K Ultra HD LED-LCD Smart TV');
      $('input[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][make]"]').val('LG');
      $('input[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][model]"]').val('55UF770T');

      $('textarea[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][details_of_your_complaint_retail2]"]').val('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu rhoncus est. Vestibulum sit amet lacus ac velit ullamcorper scelerisque. In faucibus ex diam, sit amet molestie diam aliquet vitae. Suspendisse efficitur tincidunt facilisis. Vestibulum nec tincidunt dui. Proin nec leo id felis vehicula interdum. Donec imperdiet lacinia ante, vel ornare magna posuere eu.\n\nAenean eget ipsum eros. Nunc metus sapien, commodo non aliquam in, bibendum vitae est. Sed ut congue justo. Vivamus vestibulum suscipit erat. Cras eleifend vehicula faucibus. Nullam at ipsum molestie, tincidunt est ut, lacinia neque. Nulla bibendum tortor elementum sagittis euismod. Pellentesque faucibus sem lectus, et rutrum eros pellentesque a. Duis et scelerisque diam. Suspendisse ac elit porta, placerat urna nec, ullamcorper quam.\n\nUt ut tortor tincidunt, aliquam orci sed, vehicula ligula. Nam elementum erat ut elit pulvinar consequat. Ut eu lectus eget sem volutpat blandit at id neque. Sed id tincidunt mi. Donec porta bibendum ligula in iaculis. Nulla dictum facilisis libero fermentum scelerisque.');

      $('input[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][by_lodging_this_complaint_what_are_you_hoping_to_achieve]"]').val('Sed ut congue justo. Vivamus vestibulum suscipit erat. Cras eleifend vehicula faucibus.');

      $('#edit-submitted-date-of-purchase-contract').val('20/09/2015');
      $('#edit-submitted-date-work-completed-scheduled-to-be-completed').val('20/09/2015');
      $('#edit-submitted-fs-aboutthecomplaint-fs-retailgoods-complaint-goods-received-1').attr('checked', true);
      $('input[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][cost_of_goods_or_services]"]').val('$3,200');
      $('input[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][how_much_of_the_purchase_price_has_been_paid]"]').val('Full amount');
      $('#edit-submitted-fs-aboutthecomplaint-fs-retailgoods-complaint-how-did-you-pay-for-the-goods-or-services').val(2);
      $('input[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][order_no]"]').val('CN2193');
      $('input[name*="submitted[fs_aboutthecomplaint][fs_retailgoods_complaint][invoice_no]"]').val('0702897407');

      // Page 5
      $('select[name*="title"] option:contains(' + data.name.title +')').attr('selected', 'selected');
      $('input[name*="first"]').val(data.name.first);
      $('input[name*="last"]').val(data.name.last);
      $('input[name*="street"]').val(data.location.address);
      $('input[name*="suburb"]').val( data.location.suburb.capitalizeFirstLetter() );
      $('input[name*="postcode"]').val(data.location.postcode);
      $('select[name*="state"] option:contains(' + data.location.state +')').attr('selected', 'selected');
      $('select[name*="country"] option:contains(' + data.location.country +')').attr('selected', 'selected');
      $('input[name*="telephone"]').val('0436586476');
      $('input[name*="email"]').val(data.email);


      // Page 6
      $('input[name*="submitted[fs_abouttherespondent][name_of_indvidual_or_business]"]').val('WA Cheap Electical');
      $('input[name*="submitted[fs_abouttherespondent][abn_acn_if_applicable]"]').val('63457749911');
    },
    remove: function() {
      // $('.form-item input').not('input[type="radio"],input[type="button"], input[type="submit"], input[type="reset"], input[type="hidden"], input[type="checkbox"]').val('gooneee');
      $('.form-item :input').not(':button, :submit, :reset, :hidden, :checkbox, :radio, :file').val('');
      $('select[name*="country"]').val('AU');
      $('select[name*="state"]').val('AU');
      // $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('fdfd');
      // $('form').trigger("reset");
    }
  }

  Drupal.behaviors.testCookie = {
    attach: function(context, settings) {

      var insert_text = 'Insert test data';
      var remove_text = 'Remove test data';

      console.log(Cookies.get());

      $('body').addClass('test-data');
      $('.header').prepend('<div class="systest">You are currently using <strong>' + window.location.host + '</strong></div>');

      function addData() {
        consumerComplaintData.add();
      }

      function removeData() {
        consumerComplaintData.remove();
      }

      function cookieCheck() {
        if (Cookies.get('test-data') === 'true') {
          Cookies.remove('test-data');
          console.log(Cookies.get());
          $('a.test').attr('data-test-data', false).text(insert_text);
          removeData();
        } else {
          Cookies.set('test-data', true);
          console.log(Cookies.get());
          addData();
          $('a.test').attr('data-test-data', true).text(remove_text);
        }
      }

      if (Cookies.get('test-data') !== 'true') {
        $('.systest').append('<div class="wrapper-test"><a href="#" class="test" data-test-data="false">' + insert_text +'</a></div>');
      } else {
        addData();
        $('.systest').append('<div class="wrapper-test"><a href="#" class="test" data-test-data="true">' + remove_text + '</a></div>');
      }
      $('a.test').bind('click', function(event) {
        event.preventDefault();
        cookieCheck();

      });
    }
  };


})(jQuery, Drupal, this, this.document);
