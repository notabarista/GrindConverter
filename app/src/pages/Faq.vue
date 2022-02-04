<template>
  <div class="container py-5 my-5" id="faq">
    <div class="py-md-5">
      <h2 class="text-center mb-5 pb-4">FAQ</h2>

      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-1
              variant="info"
              class="d-flex justify-content-between align-items-center"
              ><span>Accordion 1 </span>

              <div
                class="
                  round-border
                  p-1
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <div class="ion-expand-icon"></div>
              </div>
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            class="p-1"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >I start opened because <code>visible</code> is
                <code>true</code></b-card-text
              >
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-2
              variant="info"
              class="d-flex justify-content-between align-items-center"
              ><span>Accordion 2 </span>

              <div
                class="
                  round-border
                  p-1
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <div class="ion-expand-icon"></div></div
            ></b-button>
          </b-card-header>
          <b-collapse
            id="accordion-2"
            accordion="my-accordion"
            class="p-1"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-3
              variant="info"
              class="d-flex justify-content-between align-items-center"
              ><span>Accordion 3 </span>

              <div
                class="
                  round-border
                  p-1
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <div class="ion-expand-icon"></div></div
            ></b-button>
          </b-card-header>
          <b-collapse
            id="accordion-3"
            accordion="my-accordion"
            class="p-1"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    }
  },
}
</script>
<style lang="scss">
.accordion {
  border-top: 1px solid #e5e5e5 !important;
  border-bottom: 1px solid #e5e5e5 !important;

  .btn-info {
    color: #4b4f51;
    background-color: transparent;
    border-color: transparent;
    text-align: left;
    padding: 1rem 0;
    font-size: 1.25rem;

    &:hover {
      transform: scale(1);
    }
  }

  .not-collapsed {
    color: #f0a600;
    font-weight: 700;

    .round-border {
      border-color: #f0a600;
    }

    // Minus sign
    .ion-expand-icon {
      cursor: pointer;

      &::before {
        background-color: #f0a600;
        transform: rotate3d(0, 0, 1, 90deg);
      }
      &::after {
        background-color: #f0a600;
        transform: rotate3d(0, 0, 1, 180deg);
      }
    }
  }

  .card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: transparent;
    border-bottom: none;
  }

  .card-body {
    font-size: 0.9rem;

    padding: 0;
    padding-bottom: 1rem;
    line-height: inherit;

    .card-text {
      color: #4b4f51;
      font-weight: 400;
    }
  }
  .btn-info:not(:disabled):not(.disabled):active,
  .btn-info:not(:disabled):not(.disabled).active,
  .show > .btn-info.dropdown-toggle {
    color: #4b4f51;
    background-color: transparent;
    border-color: transparent;
  }

  .btn-info:not(:disabled):not(.disabled):active:focus,
  .btn-info:not(:disabled):not(.disabled).active:focus,
  .show > .btn-info.dropdown-toggle:focus {
    box-shadow: none;
  }

  .round-border {
    border: 2px solid #888888;
    border-radius: 100%;
  }

  // plus and minus icons
  .ion-expand-icon {
    height: 30px;
    position: relative;
    width: 30px;

    &::before,
    &::after {
      background-color: #888888;
      content: '';
      position: absolute;
      transition: transform 0.25s ease-out;
    }

    // Vertical line
    &::before {
      height: 21px;
      left: 50%;
      margin-left: -1px;
      top: 5px;
      width: 2px;
    }

    // Horizontal line
    &::after {
      height: 2px;
      left: 5px;
      margin-top: -1px;
      top: 50%;
      width: 21px;
    }
  }
  .item-icon-right {
    .ion-expand-icon {
      position: absolute;
      right: 12px;
      top: 10px;
    }
  }
}
.accordion > .card:not(:last-of-type) {
  border-bottom: 1px solid #e5e5e5;
}
</style>
