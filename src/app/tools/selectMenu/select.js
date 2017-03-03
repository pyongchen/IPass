(function () {
  //判断页面是否有弹出
  var selects = [
    {
      icon: '#select-time-icon',
      select: ".selectTime",
      eject: ".time-eject"
    },
    {
      icon: '#select-location-icon',
      select: '.selectLocation',
      eject: ".location-eject"
    },
    {
      icon: '#select-type-icon',
      select: '.selectType',
      eject: ".type-eject"
    },
    {
      icon: '#select-multi-icon',
      select: '.multiSelect',
      eject: ".multi-eject"
    }
  ];

  $(document).ready(function () {
    //等待元素加载完
    setTimeout(function () {
      //时间筛选器(2级)
      $(".time-first>li").click(function () {
        $(".time-second").children('li').removeClass('second-level');
        $(".time-first").children('li').removeClass('first-level');
        $(this).addClass('first-level');
        $(".time-second").css("left", "33.48%").children('li')
          .click(function () {
            $('.time-second').children('li').removeClass('second-level');
            $(this).addClass('second-level');
          })
      });

      //地点筛选器(3级)
      $(".location-first>li").click(function () {
        $('.location-first').children('li').removeClass('first-level');
        $('.location-second').children('li').removeClass('second-level');
        $('.location-third').children('li').removeClass('third-level');
        $(this).addClass('first-level');
        $(".location-second").css("left", "33.48%").children('li')
          .click(function () {
            $('.location-second').children('li').removeClass('second-level');
            $('.location-third').children('li').removeClass('third-level');
            $(this).addClass('second-level');
            $(".location-third").css("left", "66.96%").children('li')
              .click(function () {
                $('.location-third').children('li').removeClass('third-level');
                $(this).addClass('third-level');
              });
          });
      });

      //类型筛选器(1级)
      $(".type-first>li").click(function () {
        $('.type-first').children('li').removeClass('first-level');
        $(this).addClass('first-level');
      });

      //多项筛选器(1级)
      $(".multi-first>li").click(function () {
        $('.multi-first').children('li').removeClass('first-level');
        $(this).addClass('first-level');
      });

      //判断页面是否有弹出
      for (var i = 0; i < selects.length; i++) {
        $(selects[i].select).click(function () {
          for (var j = 0; j < selects.length; j++)
            if (selects[j].select != ('.' + this.className)) {
              if ($(selects[j].eject).hasClass('grade-w-roll')) {
                $(selects[j].eject).removeClass('grade-w-roll');
              }
            } else {
              if ($(selects[j].eject).hasClass('grade-w-roll')) {
                $(selects[j].eject).removeClass('grade-w-roll');
                $(selects[j].icon).removeClass('down');
                $(selects[j].icon).addClass('up');
                $('#user-experience').show();
              } else {
                $(selects[j].eject).addClass('grade-w-roll');
                $(selects[j].icon).removeClass('up');
                $(selects[j].icon).addClass('down');
                $('#user-experience').hide()
              }
            }
        })
      }
    }, 10);
  });

})();
