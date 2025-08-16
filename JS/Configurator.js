  $(document).ready(function () {
    let activeFilter = null;

    function showFiltered(fuelType) {
      $(".card").hide();
      $('.card[data-fuel="' + fuelType + '"]').show();

      $("section").each(function () {
        const hasVisible = $(this).find(".card:visible").length > 0;
        $(this).toggle(hasVisible);
        $(this).next("hr").toggle(hasVisible);
      });
    }

    function showAll() {
      $(".card").show();
      $("section").show();
      $("section").next("hr").show();
    }

    $("#Hybrid").click(function (e) {
      e.stopPropagation();
      if (activeFilter === "Hybrid") {
        showAll();
        activeFilter = null;
      } else {
        showFiltered("Plug-in Hybrid");
        activeFilter = "Hybrid";
      }
    });

    $("#Electric").click(function (e) {
      e.stopPropagation();
      if (activeFilter === "Electric") {
        showAll();
        activeFilter = null;
      } else {
        showFiltered("Full-Electric");
        activeFilter = "Electric";
      }
    });
    $(document).click(function () {
      showAll();
      activeFilter = null;
    });
    $(".card, nav, .navbar, .btn, .nav-tabs").click(function (e) {
      e.stopPropagation();
    });
  });
