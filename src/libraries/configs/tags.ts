
//interface for tags config which assigns a data type to the tags
interface TagsConfig {
    disableApiTests?: boolean;
    disableE2eTests?: boolean;
    disableDbTests?: boolean;
    disableAllTests?: boolean;
  }
  
  //adds default boolean values to the tags config
  export const defaultTagsConfig: TagsConfig = {
    disableApiTests: true,
    disableE2eTests: true,
    disableDbTests: true,
    disableAllTests: true,
  };

  //utility function to generate and map tags
  export function tags(configOverrides: {
    tagsConfig?: Partial<TagsConfig>,
  }): string {
    const tagsConfig = { ...defaultTagsConfig, ...configOverrides.tagsConfig };
    const tags: string[] = [];
    if (!tagsConfig.disableApiTests) tags.push('@api');
    if (!tagsConfig.disableE2eTests) tags.push('@e2e');
    if (!tagsConfig.disableDbTests) tags.push('@db');
    if (!tagsConfig.disableAllTests) tags.push('@all');

    //returns the tags if the length is greater than 0 and joins the tags with a space
    return tags.length > 0 ? ' ' + tags.join(' ') : '';
  }