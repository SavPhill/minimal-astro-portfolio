---
title: "WooCommerce to Shopify"
date: 2023-05-01
excerpt: "We recently performed a migration from a self hosted WordPress WooCommerce store to the Shopify platform for a well-known household products company which used Thai as the primary language."
metaTitle: "WooCommerce to Shopify Migration Limitations"
metaDescription: "During the technical planning, we noticed some hinderances which add unforeseen time and work to the scope at the final hurdle of the migration. I thought i’d share this along with a few solutions to help website agencies and developers work around the limitations of dealing with non-ASCII characters in Shopify platform."
keywords: ["WooCommerce to Shopify", "Shopify migration", "non-ASCII characters Shopify", "Shopify URL redirect limit"]
tags: ["E-commerce", "Web Development", "Tutorials"]
---

If you’re planning on launching your own e-commerce site, then chances are you are already familiar with WooCommerce or Shopify.

We recently performed a migration from a self hosted WordPress WooCommerce store to the Shopify platform for a well-known household products company which used Thai as the primary language. During the technical planning, we noticed some hinderances which add unforeseen time and work to the scope at the final hurdle of the migration. I thought i’d share this along with a few solutions to help website agencies and developers work around the limitations of dealing with non-ASCII characters in Shopify platform.

Skip to the limitations

## Why Would a Site Owner Migrate from WooCommerce to Shopify?

Every company has their own reasons to switch from one CMS or platform to another. There are various possible reasons why this might occur, but usually it would fall under one of the following categories:

### Shopify Has Fewer Site Maintenance Requirements

Shopify is the ultimate e-commerce platform in many respects. Your basic Shopify subscription is an all-in-one solution, where you don’t need to worry about server configuration, costs, theme/plugin/environment updates, security and more. Therefore the usual site stagnation we sometimes see in self-hosted websites which have unintentionally been left on set and forget will not occur, as your generous monthly subscription ensures that Shopify has your back.

### WooCommerce is Overwhelming

Assuming you are running a self-hosted WordPress environment, there are so many key variables which you need to look after before you have even got to managing your shop. WooCommerce is powerful, but with great power comes great responsibility, and your care and technical attention will be required to ensure your shop remains, efficient, secure and continues to look enticing.

### Reducing Server/hosting Costs

With Shopify, your costs are bundled into their convenient all-in-one plan. Depending on the VPS plan or hosting package which has been chosen for the WordPress site, it may very well be more cost effective to use a Shopify, especially if the site owner is paying for other services like a CDN which would be included out-the-box with Shopify packages.

It’s worth noting, that while the costs may seem lower, after the site owner starts recreating new and current functionality which is present in the WordPress site, there may be quite a few new recurring costs for premium Shopify apps.

## Key Limitations

Although the actual process is not covered in this article, its fairly straightforward and uncomplicated to migrate online stores from WordPress-WooCommerce to Shopify. There are various methods to allow you to map your data across, be it exporting/importing via .csv or using a platform like Matrixify to channel your data across using the REST API.

However, as you may have guessed from the title, there are some key limitations which can cause extra headaches at the very tail-end of the process.

### Shopify does not fully support non-ASCII characters.

While it can pass almost all non-ASCII characters into usual fields and meta data, there are some exceptions which for a site owner or developer, can be very frustrating.

#### Scenario 1: URL Redirects

Shopify has a feature which allows bulk url redirects, which is ideal for a smooth transition once you switch your site from it’s current platform over to Shopify.

URLs can only be sent over the Internet using the ASCII character-set. If a URL contains characters outside the ASCII set, the URL has to be converted. URL encoding converts non-ASCII characters into a format that can be transmitted over the Internet. URL encoding replaces non-ASCII characters with a “%” followed by hexadecimal digits. URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign, or %20.

Shopify URL redirects (manual or bulk) have a 255 character limit. Herein lies the issue, as the encoding process necessary to display the URL with non-ASCII characters has the potential to push URLs containing non-ASCII characters well above the 255 character limit, meaning you will be unable to place a url redirect for your product/post/page.

I cross-checked this with Shopify support, and it is confirmed that currently, Shopify does not fully support non-ASCII characters in URL redirects.

#### Solution

This is a frustrating limitation, the most obvious solution at this point is to go one step higher for the URL redirects, and redirect at DNS level. Cloudflare offers redirects as part of their free and pro plans, meaning you can set such redirects at this higher level, but may need to pay the price if you have 20+ redirects.

#### Scenario 2: Image File Names

When importing or uploading images manually via the Shopify platform, the media retains the same filename. This is useful when mapping a huge amount of products for example, you can import the mapping sheet with corresponding image name, followed by bulk importing your media file and there will be perfect synchronisation.

However, this is only the case for ASCII characters, as non-ASCII characters in the filename is assigned with a random string as the filename instead. This results in a broken mapping process.

So for example if you import a set of blog posts from a Thai website whereby the post images have Thai characters within the filenames, there will be no connection between the `<img src="URL">` and the media file within your Shopify site, thus resulting in a broken image link on the post/page/product.

#### Solution

You will need to create a small program which renames both image and filename to use ASCII characters prior to importing the mapping sheet and images. Alternatively you can manually update both- Yikes!

This blog was written in June, 2023, so i’ve tagged the Shopfy development log below incase these issues become redundant in a later update.

https://shopify.dev/changelog