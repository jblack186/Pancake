


<svg xmlns="http://www.w3.org/2000/svg" class="hidden">
  <symbol id="icon-search" viewbox="0 0 18 19" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"/>
  </symbol>

  <symbol id="icon-close" class="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </symbol>
</svg>
<{% if section.settings.enable_sticky_header %}sticky-header{% else %}div{% endif %} class="header-wrapper{% if section.settings.show_line_separator %} header-wrapper--border-bottom{% endif %}">
  <header class="header header--{{ section.settings.logo_position }} page-width{% if section.settings.menu != blank %} header--has-menu{% endif %}">
    {%- if section.settings.menu != blank -%}
      <header-drawer>
        <details class="menu-drawer-container">
          <summary class="header__icon header__icon--menu header__icon--summary link link--text focus-inset" aria-label="{{ 'sections.header.menu' | t }}">
            <span>
              {% render 'icon-hamburger' %}
              {% render 'icon-close' %}
            </span>
          </summary>
          <div id="menu-drawer" class="menu-drawer motion-reduce" tabindex="-1">
            <div class="menu-drawer__inner-container">
              <div class="menu-drawer__navigation-container">
                <nav class="menu-drawer__navigation">
                  <ul class="menu-drawer__menu list-menu" role="list">
                    {%- for link in section.settings.menu.links -%}
                      <li>
                        {%- if link.links != blank -%}
                          <details>
                            <summary class="menu-drawer__menu-item list-menu__item link link--text focus-inset{% if link.child_active %} menu-drawer__menu-item--active{% endif %}">
                              {{ link.title | escape }}
                              {% render 'icon-arrow' %}
                              {% render 'icon-caret' %}
                            </summary>
                            <div id="link-{{ link.title | escape }}" class="menu-drawer__submenu motion-reduce" tabindex="-1">
                              <div class="menu-drawer__inner-submenu">
                                <button class="menu-drawer__close-button link link--text focus-inset" aria-expanded="true">
                                  {% render 'icon-arrow' %}
                                  {{ link.title | escape }}
                                </button>
                                <ul class="menu-drawer__menu list-menu" role="list" tabindex="-1">
                                  {%- for childlink in link.links -%}
                                    <li>
                                      {%- if childlink.links == blank -%}
                                        <a href="{{ childlink.url }}" class="menu-drawer__menu-item link link--text list-menu__item focus-inset{% if childlink.current %} menu-drawer__menu-item--active{% endif %}"{% if childlink.current %} aria-current="page"{% endif %}>
                                          {{ childlink.title | escape }}
                                        </a>
                                      {%- else -%}
                                        <details>
                                          <summary class="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                                            {{ childlink.title | escape }}
                                            {% render 'icon-arrow' %}
                                            {% render 'icon-caret' %}
                                          </summary>
                                          <div id="childlink-{{ childlink.title | escape }}" class="menu-drawer__submenu motion-reduce">
                                            <button class="menu-drawer__close-button link link--text focus-inset" aria-expanded="true">
                                              {% render 'icon-arrow' %}
                                              {{ childlink.title | escape }}
                                            </button>
                                            <ul class="menu-drawer__menu list-menu" role="list" tabindex="-1">
                                              {%- for grandchildlink in childlink.links -%}
                                                <li>
                                                  <a href="{{ grandchildlink.url }}" class="menu-drawer__menu-item link link--text list-menu__item focus-inset{% if grandchildlink.current %} menu-drawer__menu-item--active{% endif %}"{% if grandchildlink.current %} aria-current="page"{% endif %}>
                                                    {{ grandchildlink.title | escape }}
                                                  </a>
                                                </li>
                                              {%- endfor -%}
                                            </ul>
                                          </div>
                                        </details>
                                      {%- endif -%}
                                    </li>
                                  {%- endfor -%}
                                </ul>
                              </div>
                            </div>
                          </details>
                        {%- else -%}
                          <a href="{{ link.url }}" class="menu-drawer__menu-item list-menu__item link link--text focus-inset{% if link.current %} menu-drawer__menu-item--active{% endif %}"{% if link.current %} aria-current="page"{% endif %}>
                            {{ link.title | escape }}
                          </a>
                        {%- endif -%}
                      </li>
                    {%- endfor -%}
                  </ul>
                </nav>
                <div class="menu-drawer__utility-links">
                  {%- if shop.customer_accounts_enabled -%}
                    <a href="{%- if customer -%}{{ routes.account_url }}{%- else -%}{{ routes.account_login_url }}{%- endif -%}" class="menu-drawer__account link link--text focus-inset h5">
                      {% render 'icon-account' %}
                      {%- liquid
                        if customer
                          echo 'customer.account_fallback' | t
                        else
                          echo 'customer.log_in' | t
                        endif
                      -%}
                    </a>
                  {%- endif -%}
                  <ul class="list list-social list-unstyled" role="list">
                    {%- if settings.social_twitter_link != blank -%}
                      <li class="list-social__item">
                        <a href="{{ settings.social_twitter_link }}" class="link link--text list-social__link" aria-describedby="a11y-external-message">
                          {%- render 'icon-twitter' -%}
                          <span class="visually-hidden">{{ 'general.social.links.twitter' | t }}</span>
                        </a>
                      </li>
                    {%- endif -%}
                    {%- if settings.social_facebook_link != blank -%}
                      <li class="list-social__item">
                        <a href="{{ settings.social_facebook_link }}" class="link link--text list-social__link" aria-describedby="a11y-external-message">
                          {%- render 'icon-facebook' -%}
                          <span class="visually-hidden">{{ 'general.social.links.facebook' | t }}</span>
                        </a>
                      </li>
                    {%- endif -%}
                    {%- if settings.social_pinterest_link != blank -%}
                      <li class="list-social__item">
                        <a href="{{ settings.social_pinterest_link }}" class="link link--text list-social__link" aria-describedby="a11y-external-message">
                          {%- render 'icon-pinterest' -%}
                          <span class="visually-hidden">{{ 'general.social.links.pinterest' | t }}</span>
                        </a>
                      </li>
                    {%- endif -%}
                    {%- if settings.social_instagram_link != blank -%}
                      <li class="list-social__item">
                        <a href="{{ settings.social_instagram_link }}" class="link link--text list-social__link" aria-describedby="a11y-external-message">
                          {%- render 'icon-instagram' -%}
                          <span class="visually-hidden">{{ 'general.social.links.instagram' | t }}</span>
                        </a>
                      </li>
                    {%- endif -%}
                    {%- if settings.social_tumblr_link != blank -%}
                      <li class="list-social__item">
                        <a href="{{ settings.social_tumblr_link }}" class="link link--text list-social__link" aria-describedby="a11y-external-message">
                          {%- render 'icon-tumblr' -%}
                          <span class="visually-hidden">{{ 'general.social.links.tumblr' | t }}</span>
                        </a>
                      </li>
                    {%- endif -%}
                    {%- if settings.social_snapchat_link != blank -%}
                      <li class="list-social__item">
                        <a href="{{ settings.social_snapchat_link }}" class="link link--text list-social__link" aria-describedby="a11y-external-message">
                          {%- render 'icon-snapchat' -%}
                          <span class="visually-hidden">{{ 'general.social.links.snapchat' | t }}</span>
                        </a>
                      </li>
                    {%- endif -%}
                    {%- if settings.social_youtube_link != blank -%}
                      <li class="list-social__item">
                        <a href="{{ settings.social_youtube_link }}" class="link link--text list-social__link" aria-describedby="a11y-external-message">
                          {%- render 'icon-youtube' -%}
                          <span class="visually-hidden">{{ 'general.social.links.youtube' | t }}</span>
                        </a>
                      </li>
                    {%- endif -%}
                    {%- if settings.social_vimeo_link != blank -%}
                      <li class="list-social__item">
                        <a href="{{ settings.social_vimeo_link }}" class="link link--text list-social__link" aria-describedby="a11y-external-message">
                          {%- render 'icon-vimeo' -%}
                          <span class="visually-hidden">{{ 'general.social.links.vimeo' | t }}</span>
                        </a>
                      </li>
                    {%- endif -%}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </details>
      </header-drawer>
    {%- endif -%}

    {%- if section.settings.logo_position == 'top-center' or section.settings.menu == blank -%}
      <details-modal class="header__search">
        <details>
          <summary class="header__icon header__icon--search header__icon--summary link link--text focus-inset modal__toggle" aria-haspopup="dialog" aria-label="{{ 'general.search.search' | t }}">
            <span>
              <svg class="modal__toggle-open icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-search">
              </svg>
              <svg class="modal__toggle-close icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-close">
              </svg>
            </span>
          </summary>
          <div class="search-modal modal__content" role="dialog" aria-modal="true" aria-label="{{ 'general.search.search' | t }}">
            <div class="search-modal__content" tabindex="-1">
              <form action="{{ routes.search_url }}" method="get" role="search" class="search search-modal__form">
                <div class="field">
                  <input class="search__input field__input" id="Search-In-Modal" type="search" name="q" value="{{ search.terms | escape }}" placeholder="{{ 'general.search.search' | t }}">
                  <label class="field__label" for="Search-In-Modal">{{ 'general.search.search' | t }}</label>
                  <input type="hidden" name="options[prefix]" value="last">
                  <button class="search__button field__button" aria-label="{{ 'general.search.search' | t }}">
                    <svg class="icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                      <use href="#icon-search">
                    </svg>
                  </button>
                </div>
              </form>
              <button type="button" class="modal__close-button link link--text focus-inset" aria-label="{{ 'accessibility.close' | t }}">
                <svg class="icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                  <use href="#icon-close">
                </svg>
              </button>
            </div>
          </div>
        </details>
      </details-modal>
    {%- endif -%}

    {%- if request.page_type == 'index' -%}
      <h1 class="header__heading">
    {%- endif -%}
        <a href="{{ routes.root_url }}" class="header__heading-link link link--text focus-inset">
          {%- if section.settings.logo != blank -%}
            {%- assign image_size = section.settings.logo_width | append: 'x' -%}
            <img srcset="{{ section.settings.logo | img_url: image_size }} 1x, {{ section.settings.logo | img_url: image_size, scale: 2 }} 2x"
              src="{{ section.settings.logo | img_url: image_size }}"
              loading="lazy"
              class="header__heading-logo"
              alt="{{ section.settings.logo.alt | default: shop.name | escape }}">
          {%- else -%}
            <span class="h2">{{ shop.name }}</span>
          {%- endif -%}
        </a>
    {%- if request.page_type == 'index' -%}
      </h1>
    {%- endif -%}

    {%- if section.settings.menu != blank -%}
      <nav class="header__inline-menu">
        <ul class="list-menu list-menu--inline" role="list">
          {%- for link in section.settings.menu.links -%}
            <li>
              {%- if link.links != blank -%}
                <details-disclosure>
                  <details>
                    <summary class="header__menu-item list-menu__item link focus-inset">
                      <span {%- if link.child_active %} class="header__active-menu-item"{% endif %}>{{ link.title | escape }}</span>
                      {% render 'icon-caret' %}
                    </summary>
                    <ul class="header__submenu list-menu list-menu--disclosure caption-large motion-reduce" role="list" tabindex="-1">
                      {%- for childlink in link.links -%}
                        <li>
                          {%- if childlink.links == blank -%}
                            <a href="{{ childlink.url }}" class="header__menu-item list-menu__item link link--text focus-inset caption-large{% if childlink.current %} list-menu__item--active{% endif %}"{% if childlink.current %} aria-current="page"{% endif %}>
                              {{ childlink.title | escape }}
                            </a>
                          {%- else -%}
                            <details>
                              <summary class="header__menu-item link link--text list-menu__item focus-inset caption-large">
                                {{ childlink.title | escape }}
                                {% render 'icon-caret' %}
                              </summary>
                              <ul class="header__submenu list-menu motion-reduce">
                                {%- for grandchildlink in childlink.links -%}
                                  <li>
                                    <a href="{{ grandchildlink.url }}" class="header__menu-item list-menu__item link link--text focus-inset caption-large{% if grandchildlink.current %} list-menu__item--active{% endif %}"{% if grandchildlink.current %} aria-current="page"{% endif %}>
                                      {{ grandchildlink.title | escape }}
                                    </a>
                                  </li>
                                {%- endfor -%}
                              </ul>
                            </details>
                          {%- endif -%}
                        </li>
                      {%- endfor -%}
                    </ul>
                  </details>
                </details-disclosure>
              {%- else -%}
                <a href="{{ link.url }}" class="header__menu-item header__menu-item list-menu__item link link--text focus-inset"{% if link.current %} aria-current="page"{% endif %}>
                  <span {%- if link.current %} class="header__active-menu-item"{% endif %}>{{ link.title | escape }}</span>
                </a>
              {%- endif -%}
            </li>
          {%- endfor -%}
        </ul>
      </nav>
    {%- endif -%}

    <div class="header__icons">
      <details-modal class="header__search">
        <details>
          <summary class="header__icon header__icon--search header__icon--summary link link--text focus-inset modal__toggle" aria-haspopup="dialog" aria-label="{{ 'general.search.search' | t }}">
            <span>
              <svg class="modal__toggle-open icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-search">
              </svg>
              <svg class="modal__toggle-close icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-close">
              </svg>
            </span>
          </summary>
          <div class="search-modal modal__content" role="dialog" aria-modal="true" aria-label="{{ 'general.search.search' | t }}">
            <div class="search-modal__content" tabindex="-1">
              <form action="{{ routes.search_url }}" method="get" role="search" class="search search-modal__form">
                <div class="field">
                  <input class="search__input field__input" id="Search-In-Modal" type="search" name="q" value="{{ search.terms | escape }}" placeholder="{{ 'general.search.search' | t }}">
                  <label class="field__label" for="Search-In-Modal">{{ 'general.search.search' | t }}</label>
                  <input type="hidden" name="options[prefix]" value="last">
                  <button class="search__button field__button focus-inset" aria-label="{{ 'general.search.search' | t }}">
                    <svg class="icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                      <use href="#icon-search">
                    </svg>
                  </button>
                </div>
              </form>
              <button type="button" class="search-modal__close-button modal__close-button link link--text focus-inset" aria-label="{{ 'accessibility.close' | t }}">
                <svg class="icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                  <use href="#icon-close">
                </svg>
              </button>
            </div>
          </div>
        </details>
      </details-modal>

      {%- if shop.customer_accounts_enabled -%}
        <a href="{%- if customer -%}{{ routes.account_url }}{%- else -%}{{ routes.account_login_url }}{%- endif -%}" class="header__icon header__icon--account link link--text focus-inset">
          {% render 'icon-account' %}
          <span class="visually-hidden">
            {%- liquid
              if customer
                echo 'customer.account_fallback' | t
              else
                echo 'customer.log_in' | t
              endif
            -%}
          </span>
        </a>
      {%- endif -%}

      <a href="{{ routes.cart_url }}" class="header__icon header__icon--cart link link--text focus-inset" id="cart-icon-bubble">
        {%- liquid
          if cart == empty
            render 'icon-cart-empty'
          else
            render 'icon-cart'
          endif
        -%}
        <span class="visually-hidden">{{ 'templates.cart.cart' | t }}</span>
        {%- if cart != empty -%}
          <div class="cart-count-bubble">
            {%- if cart.item_count < 100 -%}
              <span aria-hidden="true">{{ cart.item_count }}</span>
            {%- endif -%}
            <span class="visually-hidden">{{ 'sections.header.cart_count' | t: count: cart.item_count }}</span>
          </div>
        {%- endif -%}
      </a>
    </div>
  </header>
</{% if section.settings.enable_sticky_header %}sticky-header{% else %}div{% endif %}>

{%- if request.page_type != 'cart' -%}
  {%- render 'cart-notification' -%}
{%- endif -%}

{% javascript %}
  class StickyHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.header = document.getElementById('shopify-section-header');
      this.headerBounds = {};
      this.currentScrollTop = 0;

      this.onScrollHandler = this.onScroll.bind(this);

      window.addEventListener('scroll', this.onScrollHandler, false);

      this.createObserver();
    }

    disconnectedCallback() {
      window.removeEventListener('scroll', this.onScrollHandler);
    }

    createObserver() {
      let observer = new IntersectionObserver((entries, observer) => {
        this.headerBounds = entries[0].intersectionRect;
        observer.disconnect();
      });

      observer.observe(this.header);
    }

    onScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
        requestAnimationFrame(this.hide.bind(this));
      } else if (scrollTop < this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
        requestAnimationFrame(this.reveal.bind(this));
      } else if (scrollTop <= this.headerBounds.top) {
        requestAnimationFrame(this.reset.bind(this));
      }

      this.currentScrollTop = scrollTop;
    }

    hide() {
      this.header.classList.add('shopify-section-header-hidden', 'shopify-section-header-sticky');
      this.closeMenuDisclosure();
      this.closeSearchModal();
    }

    reveal() {
      this.header.classList.add('shopify-section-header-sticky', 'animate');
      this.header.classList.remove('shopify-section-header-hidden');
    }

    reset() {
      this.header.classList.remove('shopify-section-header-hidden', 'shopify-section-header-sticky', 'animate');
    }

    closeMenuDisclosure() {
      this.disclosures = this.disclosures || this.header.querySelectorAll('details-disclosure');
      this.disclosures.forEach(disclosure => disclosure.close());
    }

    closeSearchModal() {
      this.searchModal = this.searchModal || this.header.querySelector('details-modal');
      this.searchModal.close(false);
    }
  }

  customElements.define('sticky-header', StickyHeader);
{% endjavascript %}

<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": {{ shop.name | json }},
    {% if section.settings.logo %}
      {% assign image_size = section.settings.logo.width | append:'x' %}
      "logo": {{ section.settings.logo | img_url: image_size | prepend: "https:" | json }},
    {% endif %}
    "sameAs": [
      {{ settings.social_twitter_link | json }},
      {{ settings.social_facebook_link | json }},
      {{ settings.social_pinterest_link | json }},
      {{ settings.social_instagram_link | json }},
      {{ settings.social_tumblr_link | json }},
      {{ settings.social_snapchat_link | json }},
      {{ settings.social_youtube_link | json }},
      {{ settings.social_vimeo_link | json }}
    ],
    "url": {{ shop.url | append: page.url | json }}
  }
</script>

{%- if request.page_type == 'index' -%}
  {% assign potential_action_target = shop.url | append: routes.search_url | append: "?q={search_term_string}" %}
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": {{ shop.name | json }},
      "potentialAction": {
        "@type": "SearchAction",
        "target": {{ potential_action_target | json }},
        "query-input": "required name=search_term_string"
      },
      "url": {{ shop.url | append: page.url | json }}
    }
  </script>
{%- endif -%}

<script src="{{ 'cart-notification.js' | asset_url }}" defer="defer"></script>

{% schema %}
{
  "name": "t:sections.header.name",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label": "t:sections.header.settings.logo.label"
    },
    {
      "type": "range",
      "id": "logo_width",
      "min": 50,
      "max": 250,
      "step": 10,
      "unit": "t:sections.header.settings.logo_width.unit",
      "label": "t:sections.header.settings.logo_width.label",
      "default": 100
    },
    {
      "type": "select",
      "id": "logo_position",
      "label": "t:sections.header.settings.logo_position.label",
      "options": [
        {
          "value": "middle-left",
          "label": "t:sections.header.settings.logo_position.options__1.label"
        },
        {
          "value": "top-left",
          "label": "t:sections.header.settings.logo_position.options__2.label"
        },
        {
          "value": "top-center",
          "label": "t:sections.header.settings.logo_position.options__3.label"
        }
      ],
      "default": "middle-left"
    },
    {
      "type": "link_list",
      "id": "menu",
      "label": "t:sections.header.settings.menu.label",
      "default": "main-menu"
    },
    {
      "type": "checkbox",
      "id": "show_line_separator",
      "label": "t:sections.header.settings.show_line_separator.label",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "enable_sticky_header",
      "label": "t:sections.header.settings.enable_sticky_header.label",
      "default": true,
      "info": "t:sections.header.settings.enable_sticky_header.info"
    }
  ]
}
{% endschema %}

