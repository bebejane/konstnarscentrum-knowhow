import { Client, SimpleSchemaTypes } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log('Create model "Medlem" (`member`)');
  await client.itemTypes.create(
    {
      id: "LIP_uDB9RMeopV35L9i_ZQ",
      name: "Medlem",
      api_key: "member",
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "WNuaVRGrR9W5XZg0jBDeog",
    },
  );

  console.log('Create model "Anm\u00E4lan" (`application`)');
  await client.itemTypes.create(
    {
      id: "Mp_LEZ7zRGiUuFUSsoMR1Q",
      name: "Anm\u00E4lan",
      api_key: "application",
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "YGgtUt_hS8asUIODmrJKcg",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "E-post" (`email`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "A4AK_aKVRqOuLw1pYr8o7A",
    label: "E-post",
    field_type: "string",
    api_key: "email",
    validators: {
      required: {},
      unique: {},
      format: { predefined_pattern: "email" },
    },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Namn" (`first_name`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "XVpyti4SQi2Ch2PQOLJmFQ",
    label: "Namn",
    field_type: "string",
    api_key: "first_name",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Efternamn" (`last_name`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "BxaqXiwlRF2PgE__osPfwg",
    label: "Efternamn",
    field_type: "string",
    api_key: "last_name",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Adress" (`address`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "EsOBkymkTS6A8oW8lGrNaA",
    label: "Adress",
    field_type: "string",
    api_key: "address",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Stad" (`city`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "D3fkur_qRruFVYnbYnGBiQ",
    label: "Stad",
    field_type: "string",
    api_key: "city",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Postnummer" (`postal_code`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "aL5UWxsUTaO07radL7C2iA",
    label: "Postnummer",
    field_type: "string",
    api_key: "postal_code",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Telefon" (`phone`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "UkyqttSLQweobzbCzs3BQQ",
    label: "Telefon",
    field_type: "string",
    api_key: "phone",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Integer number field "\u00C5lder" (`age`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "QqBYLC5lTZu7cvZ6gDjhkw",
    label: "\u00C5lder",
    field_type: "integer",
    api_key: "age",
    appearance: {
      addons: [],
      editor: "integer",
      parameters: { placeholder: null },
    },
  });

  console.log(
    'Create Single-line string field "K\u00F6n" (`sex`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "Uu0P0c_ARaClHOgidT7S6A",
    label: "K\u00F6n",
    field_type: "string",
    api_key: "sex",
    validators: {
      enum: { values: ["Man", "Kvinna", "Annat", "Vill ej uppge"] },
    },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "F\u00F6delseland" (`country`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "NKujmJdMSjSBYBr3DK-IVw",
    label: "F\u00F6delseland",
    field_type: "string",
    api_key: "country",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Spr\u00E5k" (`language`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "YCRiC4ocSVqjuFd0eHx8wA",
    label: "Spr\u00E5k",
    field_type: "string",
    api_key: "language",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "L\u00E4nk" (`url`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "KSk0yxQATNyTuxly4quFkA",
    label: "L\u00E4nk",
    field_type: "string",
    api_key: "url",
    validators: { format: { predefined_pattern: "url" } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Multiple-paragraph text field "Social media" (`social`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "BnKw2-foRnmuNtXxCvciIw",
    label: "Social media",
    field_type: "text",
    api_key: "social",
    appearance: {
      addons: [],
      editor: "markdown",
      parameters: {
        toolbar: [
          "heading",
          "bold",
          "italic",
          "strikethrough",
          "code",
          "unordered_list",
          "ordered_list",
          "quote",
          "link",
          "image",
          "fullscreen",
        ],
      },
      type: "markdown",
    },
    default_value: "",
  });

  console.log(
    'Create Multiple-paragraph text field "Utbildning" (`education`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "Xyt21P-qRYqACbULLv1P7Q",
    label: "Utbildning",
    field_type: "text",
    api_key: "education",
    appearance: {
      addons: [],
      editor: "markdown",
      parameters: { toolbar: [] },
      type: "markdown",
    },
    default_value: "",
  });

  console.log(
    'Create Multiple-paragraph text field "Uppdrag" (`mission`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "Sn8QZ_hFRD6IOh40I7kGOg",
    label: "Uppdrag",
    field_type: "text",
    api_key: "mission",
    appearance: {
      addons: [],
      editor: "markdown",
      parameters: { toolbar: [] },
      type: "markdown",
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Yrkeskategori" (`work_category`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "BFRRZR_YT6OZ1-dICDGvWA",
    label: "Yrkeskategori",
    field_type: "string",
    api_key: "work_category",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single asset field "Pdf" (`pdf`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "PCAVkALXR6-03XqU6QAk7g",
    label: "Pdf",
    field_type: "file",
    api_key: "pdf",
    validators: { extension: { extensions: ["pdf"] } },
    appearance: { addons: [], editor: "file", parameters: {} },
  });

  console.log(
    'Create Boolean field "Konstn\u00E4rscentrum medlem" (`kc_member`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "QrYBNjb0RuSpCZMZJcsoNw",
    label: "Konstn\u00E4rscentrum medlem",
    field_type: "boolean",
    api_key: "kc_member",
    appearance: { addons: [], editor: "boolean", parameters: {} },
  });

  console.log(
    'Create Boolean field "Utbildad p\u00E5 konstn\u00E4rlig h\u00F6gskola minst 3 \u00E5r" (`education_three_years`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "cm0dQaRASAiovcYOIwcw-w",
    label: "Utbildad p\u00E5 konstn\u00E4rlig h\u00F6gskola minst 3 \u00E5r",
    field_type: "boolean",
    api_key: "education_three_years",
    appearance: { addons: [], editor: "boolean", parameters: {} },
  });

  console.log(
    'Create Boolean field "Jag har arbetat l\u00E4ngre \u00E4n 3 \u00E5r som professionell konstn\u00E4r utan att ha g\u00E5tt konstn\u00E4rlig h\u00F6gskola" (`have_worked_three_years`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "ZlqSxOlmQq2XGqFJIh5vKw",
    label:
      "Jag har arbetat l\u00E4ngre \u00E4n 3 \u00E5r som professionell konstn\u00E4r utan att ha g\u00E5tt konstn\u00E4rlig h\u00F6gskola",
    field_type: "boolean",
    api_key: "have_worked_three_years",
    appearance: { addons: [], editor: "boolean", parameters: {} },
  });

  console.log(
    'Create Boolean field "Skyddad identitet" (`protected_identity`) in model "Medlem" (`member`)',
  );
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "AJ8pUKfFREmyVEnkt3rOcQ",
    label: "Skyddad identitet",
    field_type: "boolean",
    api_key: "protected_identity",
    appearance: { addons: [], editor: "boolean", parameters: {} },
  });

  console.log('Create JSON field "Auth" (`auth`) in model "Medlem" (`member`)');
  await client.fields.create("LIP_uDB9RMeopV35L9i_ZQ", {
    id: "dldaaNw4RpWeukTrxwNg2A",
    label: "Auth",
    field_type: "json",
    api_key: "auth",
    appearance: { addons: [], editor: "json", parameters: {} },
  });

  console.log(
    'Create Single link field "Aktivitet" (`activity`) in model "Anm\u00E4lan" (`application`)',
  );
  await client.fields.create("Mp_LEZ7zRGiUuFUSsoMR1Q", {
    id: "MXJMc5a3TLOYm-FHqT7mWg",
    label: "Aktivitet",
    field_type: "link",
    api_key: "activity",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["1349208"],
      },
      required: {},
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
  });

  console.log(
    'Create Single link field "Medlem" (`member`) in model "Anm\u00E4lan" (`application`)',
  );
  await client.fields.create("Mp_LEZ7zRGiUuFUSsoMR1Q", {
    id: "UP_hY1WGS0uB3GuYuNZdqA",
    label: "Medlem",
    field_type: "link",
    api_key: "member",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["LIP_uDB9RMeopV35L9i_ZQ"],
      },
      required: {},
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
  });

  console.log(
    'Create Single-line string field "Status" (`approval_status`) in model "Anm\u00E4lan" (`application`)',
  );
  await client.fields.create("Mp_LEZ7zRGiUuFUSsoMR1Q", {
    id: "VPMx6qgES2WKat7R8qfBOg",
    label: "Status",
    field_type: "string",
    api_key: "approval_status",
    validators: {
      required: {},
      enum: { values: ["PENDING", "APPROVED", "DECLINED"] },
    },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "PENDING",
  });

  console.log(
    'Create Boolean field "Visa anm\u00E4lningsformul\u00E4r" (`show_form`) in model "Aktiviteter" (`activity`)',
  );
  await client.fields.create("1349208", {
    id: "ZUIxaqngT8WmXhhfzUKLkg",
    label: "Visa anm\u00E4lningsformul\u00E4r",
    field_type: "boolean",
    api_key: "show_form",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: false,
  });

  console.log("Update existing fields/fieldsets");

  console.log('Reorder fields/fieldsets for model "Aktiviteter" (`activity`)');
  await client.itemTypes.rawReorderFieldsAndFieldsets("1349208", {
    data: [
      {
        id: "ZUIxaqngT8WmXhhfzUKLkg",
        type: "field",
        attributes: { position: 8 },
        relationships: { fieldset: { data: null } },
      },
      {
        id: "10340057",
        type: "field",
        attributes: { position: 9 },
        relationships: { fieldset: { data: null } },
      },
      {
        id: "10340060",
        type: "field",
        attributes: { position: 10 },
        relationships: { fieldset: { data: null } },
      },
      {
        id: "10340061",
        type: "field",
        attributes: { position: 11 },
        relationships: { fieldset: { data: null } },
      },
    ],
  });

  console.log("Finalize models/block models");

  console.log('Update model "Medlem" (`member`)');
  await client.itemTypes.update("LIP_uDB9RMeopV35L9i_ZQ", {
    title_field: { id: "XVpyti4SQi2Ch2PQOLJmFQ", type: "field" },
    image_preview_field: { id: "PCAVkALXR6-03XqU6QAk7g", type: "field" },
  });

  console.log('Update model "Anm\u00E4lan" (`application`)');
  await client.itemTypes.update("Mp_LEZ7zRGiUuFUSsoMR1Q", {
    title_field: { id: "UP_hY1WGS0uB3GuYuNZdqA", type: "field" },
  });

  console.log("Manage menu items");

  console.log('Create menu item "Anm\u00E4lan"');
  await client.menuItems.create({
    id: "I9qgilenQCWXY68Uvt0u2A",
    label: "Anm\u00E4lan",
    item_type: { id: "Mp_LEZ7zRGiUuFUSsoMR1Q", type: "item_type" },
  });

  console.log('Create menu item "Medlem"');
  await client.menuItems.create({
    id: "Wy_WHpU1QZqbdPUO4rOI9A",
    label: "Medlem",
    item_type: { id: "LIP_uDB9RMeopV35L9i_ZQ", type: "item_type" },
  });

  console.log("Reorder elements in the tree");
  await client.menuItems.reorder([
    {
      id: "I9qgilenQCWXY68Uvt0u2A",
      position: 1,
      parent: { id: "867655", type: "menu_item" },
    },
    {
      id: "Wy_WHpU1QZqbdPUO4rOI9A",
      position: 2,
      parent: { id: "867655", type: "menu_item" },
    },
    { id: "867585", position: 10, parent: null },
    { id: "867655", position: 12, parent: null },
    { id: "1254053", position: 9, parent: null },
    { id: "C9i1649iQg67v8Npl1Dgmg", position: 26, parent: null },
    { id: "EPo1RbUpTBGraranHFNbIg", position: 13, parent: null },
    { id: "FZN_Vj3XSuO9-0OGV_QknQ", position: 19, parent: null },
  ]);

  console.log("Update permissions for environment in role Upload");
  await client.roles.updateCurrentEnvironmentPermissions("296958", {
    positive_upload_permissions: { add: [{ action: "create" }] },
  });
}
