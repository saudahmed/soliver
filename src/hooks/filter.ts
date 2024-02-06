import { useState, useMemo } from "react";
import { IArticle } from "src/types";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const useFilterArticles = (articles: IArticle[], reducer: string) => {
  const { selectedColors, selectedBrands, minimumPrice, maximumPrice } =
    useSelector((state: RootState) => {
      return state[reducer];
    });

  //Collect colors in a group as unique and non repeating
  const uniqueColorGroups = useMemo(() => {
    const groups = Array<string>();
    articles.forEach((item) => {
      item.colorVariants.forEach((colorVariant) => {
        const colorGroup = colorVariant.color.group;
        if (!groups.includes(colorGroup)) {
          groups.push(colorGroup);
        }
      });
    });
    return groups;
  }, [articles]);

  //Collect brands in a group as unique and non repeating
  const uniqueBrandGroups = useMemo(() => {
    const groups = Array<string>();
    articles.forEach((item) => {
      if (!groups.includes(item.brand)) {
        groups.push(item.brand);
      }
    });
    return groups;
  }, [articles]);

  //Use selectedColors & uniqueColorGroups to generate selectedColors by names for filtering
  const selectedColorNamesForFiltering = uniqueColorGroups.filter(
    (color, index) => selectedColors[index]
  );

  //Use selectedBrands & uniqueBrandGroups to generate selectedBrands by names for filtering
  const selectedBrandNamesForFiltering = uniqueBrandGroups.filter(
    (brand, index) => selectedBrands[index]
  );

  const filteredArticles = articles.filter((article) => {
    if (
      selectedBrandNamesForFiltering.length === 0 &&
      selectedColorNamesForFiltering.length !== 0
    ) {
      // If no brands selected then dont make it part of the condition statement
      if (
        article.colorVariants.some((variant) =>
          selectedColorNamesForFiltering.includes(variant.color.group)
        ) &&
        article.price >= minimumPrice &&
        article.price <= maximumPrice
      ) {
        return true;
      }
    } else if (
      selectedBrandNamesForFiltering.length !== 0 &&
      selectedColorNamesForFiltering.length === 0
    ) {
      // If no colors selected then dont make it part of the condition statement
      if (
        selectedBrandNamesForFiltering.includes(article.brand) &&
        article.price >= minimumPrice &&
        article.price <= maximumPrice
      ) {
        return true;
      }
    } else if (
      selectedBrandNamesForFiltering.length === 0 &&
      selectedColorNamesForFiltering.length === 0
    ) {
      // If no colors and brand selected then only make decision on price

      //EDGE case: What if minimumPrice && maximumPrice are set to 0.0 on first launch
      // articles will not filter out againt 0.0 range.

      if (minimumPrice !== 0 && maximumPrice !== 0) {
        if (article.price >= minimumPrice && article.price <= maximumPrice) {
          return true;
        }
      } else {
        // For 0.0 range return true
        return true;
      }
    } else {
      if (
        selectedBrandNamesForFiltering.includes(article.brand) &&
        article.colorVariants.some((variant) =>
          selectedColorNamesForFiltering.includes(variant.color.group)
        ) &&
        article.price >= minimumPrice &&
        article.price <= maximumPrice
      ) {
        return true;
      }
    }

    return false;
  });

  return {
    filteredArticles,
    uniqueColorGroups,
    uniqueBrandGroups,
  };
};
