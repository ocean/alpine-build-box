(function ($, Drupal, window, document) {

  Drupal.behaviors.wagelineStop = {
    attach: function(context, settings) {

      var questionsDiv = $('.webform-component--is-your-query-about-long-service-leave-or-child-employment input');
      var secondQuestion = $('#edit-submitted-is-your-query-about-long-service-leave-or-child-employment-2');

      questionsDiv.click(function() {
        if(secondQuestion.is(":checked")) {
          $('input.webform-next').attr('disabled', true);
        } else {
          $('input.webform-next').attr('disabled', false);
        }
      });

      //if 'No' is selected reset the bottom questions. webforms stupidness
      $('#edit-submitted-is-the-business-involved-in-the-employment-relationship-a-proprietary-limited-company-pty-ltd-or-limited-by-shares-company-ltd input').click(function() {
        if ($('#edit-submitted-is-the-business-involved-in-the-employment-relationship-a-proprietary-limited-company-pty-ltd-or-limited-by-shares-company-ltd-2').is(':checked')) {
          $('.webform-component--the-answer-was-yes').hide();
          $('input.webform-next').attr('disabled', false);
          $(questionsDiv).attr('checked', false);
        }
      });
    }
  };

  Drupal.behaviors.consumerStop = {
    attach: function(context, settings) {
      $("#edit-submitted-fs-goods-and-services-is-your-complaint-about input[type=radio]").change(function() {
        $('input.webform-next').attr('disabled', false);
        $('select').find('option:first').attr('selected','selected');
        // $('select option:first').attr('selected','selected');

      });

      $('#edit-submitted-fs-goods-and-services-was-the-service-a').click(function() {
        var t = $(this);
        $(this).once('disable').change(function() {
          if (t.val() == 3) {
            $('input.webform-next').attr('disabled', false);
          } else {
            $('input.webform-next').attr('disabled', true);
          }
        });
      });

      $('#edit-submitted-fs-goods-and-services-was-your-complaint-about-real-estate').click(function() {
        var t = $(this);
        $(this).once('disable').change(function() {
          if (t.val() == 6) {
            $('input.webform-next').attr('disabled', true);
          } else {
            $('input.webform-next').attr('disabled', false);
          }
        });
      });



      $('#edit-submitted-fs-goods-and-services-was-your-complaint-about-other').click(function() {
        var t = $(this);
        $(this).once('disable').change(function() {
          if (t.val() == 1) {
            $('input.webform-next').attr('disabled', true);
          } else {
            $('input.webform-next').attr('disabled', false);
          }
        });
      });
    }
  };

  Drupal.behaviors.addWordLimitToCPTextareas = {
    attach: function(context, settings) {
      // Embedded Node ID >:-|
      // $('form#webform-client-form-56 div.form-textarea-wrapper > textarea[id^="edit"]').each(function() {
      $('div.form-textarea-wrapper > textarea[id^="edit-submitted-fs-aboutthecomplaint"]').each(function() {
        var t = $(this);
        var wordCount = t.parent().once('wordcount').after(function() {
          return '<div class="wordCountContainer" role="status" aria-live="polite"><p>Words remaining: <span class="wordCount">500</span></p></div>';
        });

        $('div.form-textarea-wrapper > textarea[id^="edit-submitted-fs-aboutthecomplaint"]').keyup(function () {
          var s = t.val();
          s = s.replace(/(^\s*)|(\s*$)/gi,"");
          s = s.replace(/[ ]{2,}/gi," ");
          s = s.replace(/\n /,"\n");
          var w = 500 - s.split(" ").length;
          $('.wordCount').text(w);
          if (w < 25 && w > 5) {
            $('.wordCount').css({
              "font-weight": "bold",
              "color": "orange"
            });
          } else if (w < 5) {
            $('.wordCount').css({
              "font-weight": "bold",
              "color": "red"
            });
          } else if (w > 25) {
            $('.wordCount').css({
              "font-weight": "inherit",
              "color": "inherit"
            });
          }
          if (w < 1) {
            var e = s.split(" ", 500);
            t.val(e.join(" "));
            t.parent().parent().next().children('input').focus();
          }
        });
      });
    }
  };

  Drupal.behaviors.addCPComplaintFormEventTracking = {
    attach: function(context, settings) {
      var formTitle = $("header h1.title").text().toLowerCase().replace(/\s/gi,"_");
      var formPageNum = $("form.webform-client-form input[name='details[page_num]'").val();
      var formPageCount = $("form.webform-client-form input[name='details[page_count]'").val();
      var formPage = formPageNum + " of " + formPageCount;

      // console.log("form title: " + formTitle);
      // console.log("form page number: " + formPageNum);
      // console.log("form page count: " + formPageCount);

      $("input.webform-next").bind("click keyup", function() {
        ga('send', {
          'hitType':        'event',      // Required.
          'eventCategory':  formTitle,    // Required.
          'eventAction':    'continue',   // Required.
          'eventLabel':     formPage
        });
      });

      $("input.webform-submit").bind("click keyup", function() {
        ga('send', {
          'hitType':        'event',      // Required.
          'eventCategory':  formTitle,    // Required.
          'eventAction':    'submitted',  // Required.
          'eventLabel':     formPage
        });
      });
    }
  };

  Drupal.behaviors.addLimitToTextArea = {
    attach: function(context, settings) {
      $('textarea[id^="edit-field-complaint-und"]').each(function() {
        $(this).limit('200');
      });
    }
  };

  Drupal.behaviors.addPlaceholdersToEntityForms = {
    attach: function(context, settings) {
      $('.field-type-datetime input').attr('placeholder', 'Select date: (DD/MM/YYYY)');
      $('#edit-field-cmp-date-of-service-und-0-value-timeEntry-popup-1').attr('placeholder', 'Enter time: (14:00)');
      $('#edit-field-cmp-desc-complaint-und-0-value').attr('placeholder', 'Please add a brief description of your building complaint.');
      $('#edit-field-cmp-contracted-value-und-0-value').attr('placeholder', 'E.g. $100,000.00');

      $('#edit-field-cmp-contracted-value-und-0-value').blur(function() {
        var value = $(this).val();
        if (/^\$/.test(value) === false) {
          var new_value = value.replace(/[^[0-9 +]]*/g, '');
          $(this).val(new_value);
          $('#edit-field-cmp-contracted-value-und-0-value').formatCurrency();
        }
      });
    }
  };


  Drupal.behaviors.pagination = {
    attach: function(context, settings) {
      if ($('body').hasClass('page-eform-submit')) {
        var step = $('form#complaint-form-entityform-edit-form').data("current-step");
        var steps = $('form#complaint-form-entityform-edit-form').data("current-total");
        $('.header__pagination').remove();
        $('<div class="header__pagination"><span>' + step + '</span> ' + 'of' + ' <span>' + steps + '</span></div>').appendTo('.header__primary .container');
      }

      if ($('span.webform-pager-page-num').length) {
        var getHTML = $('span.webform-pager-page-num').html();
        $('span.webform-pager-page-num').hide();
        var textArr = [];
        $(getHTML).each(function() {
          textArr.push($(this).text());
        });
        $('<div class="header__pagination"><span>' + textArr[0] + '</span>' + textArr[1] + '<span>' + textArr[2] + '</span></div>').appendTo('.header__primary .container');
      }
    }
  };

  // set number outside of the drupals stuffz
  Drupal.behaviors.complaintsFormTable = {
    attach: function(context, settings) {
      $('body.page-eform-submit-complaint-form #edit-field-complaint-desc').once().append('<table id="complaints-table" style="width: 100%;"><thead><tr><th colspan="3">Complaint Items</th></tr></thead><tbody><tr class="new-complaint"><td><em>Please add a new complaint item below...</em></td></tr></tbody></table>');
    }
  };

  Drupal.behaviors.disabledSelect ={
    attach: function(context, settings) {
      $('select#edit-field-cmp-property-address-und-0-field-cmp-property-state-und').attr('title', 'Property must be in Western Australia.');
      $('select#edit-field-cmp-property-address-und-0-field-cmp-property-country-und').attr('title', 'Property must be in Western Australia.');
    }
  };

  Drupal.behaviors.Step5 = {
    attach: function(context, settings) {
      $('body').once('set_first_primary', function() {
        $('input[name="field_cmp_contacts[und][0][field_cmp_are_you_primary][und]"').attr('checked', 'checked').attr('value', 1);
      });
      $('.field-name-field-cmp-are-you-primary input').bind('click', function(){
        $('.field-name-field-cmp-are-you-primary input').removeAttr('checked').attr('value', 0);
        $(this).attr('checked', 'checked').attr('value', 1);
      });
    }
  };

  Drupal.behaviors.Step8 = {
    attach: function(context, settings) {
      $('input[id^="edit-field-complaint-und-add-more"]').eye({
        'attr()': {
          args: ['disabled'],
          onChange: function(oldVal, newVal, elm, args) {
            // var id = $("div[id^='field-complaint-add-more-wrapper']");
            // waits for 'Disabled' to be removed from the div before running the function
            if(newVal === false) {
              $('body').once('run', function(){
                doSomething();
              });
            }
          }
        }
      });
      // Check if "Remove" button is pressed /////////////////////////////////
      $("table[id^='field-complaint-values'] > tbody > tr.draggable > td").find('input:last').once('runnnn').each(function() {
        $(this).eye({
          'attr()': {
            args: ['disabled'],
            onChange: function(oldVal, newVal, elm, args) {
              if(newVal === false) {
                $('body').once('run', function() {
                  doSomething();
                  $("table[id^='field-complaint-values'] > tbody > tr.draggable:last-child").show();

                  if($("table[id^='field-complaint-values'] > tbody > tr.draggable").length === 1) {
                    $('table#complaints-table tbody').append('<tr class="new-complaint"><td><em>Please add a new complaint item below...</em></td></tr>');
                  }
                });
              }
            }
          }
        });
      });
      $("table[id^='field-complaint-values'] > tbody > tr.draggable").each(function(i) {
        $(this).find('.field-name-field-title.field-widget-text-textfield').once('add-title').prepend('<h2>Complaint item ' + (i + 1) + '</h2>');
      });

      function doSomething() {
        $('table#complaints-table tbody tr').remove();
        $("table[id^='field-complaint-values'] > tbody > tr.draggable:not(:last-child)").each(function(i) {
          $(this).addClass('complaint_' + i).hide();
          $(this).each(function() {
            var title = $(this).find("input[id*='-field-" + 'title' + "']").val();
            $('table#complaints-table tbody').append('<tr class="complaint_' + i + '"><td style="text-align: center; width="8%">' + (i + 1) + '</td><td width="76%" class="item">' + title + '</td><td style="text-align: center;"><a href="#" data-complaint="complaint_' + i + '" class="show-complaint">View details</a></td></tr>');
            });
          });
          $("a.show-complaint").click(function() {
            var complaint = $('.' + $(this).data('complaint'));
            var cid = $(this).data('complaint');
            $('tr.draggable').hide();
            $(complaint).show();
            $(complaint).find(".field-name-field-supporting-evidence").once('add-stuffs', function() {
              $(this).after('<button href="#" data-complaint-id="'+ cid + '" class="save-item">Update item</button>');
              $("a.save-item").click(function() {
                var nVal = complaint.find("input[id*='-field-" + 'title' + "']").val();
                var trId = complaint.attr('class');
                $('tr.draggable').hide();
                $('tr.draggable:last-child').show();
                return false;
              });
            });
            return false;
          });
        setTimeout(function() {
          $('body').removeClass('run-processed');
        }, 1000);
      }

      $('body', context).once('test', function() {
        if($("div[id^='field-complaint-add-more-wrapper']").once('ever').find('tr.draggable').length > 1) {
          doSomething();
        }
      });
    }
  };




})(jQuery, Drupal, this, this.document);
