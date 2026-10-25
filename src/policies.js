// Organisational page copy. Shared values live here so every page states the same rules as checkout.
export const company={brand:'APNA AGRO',legal:'YARNVIA EXPORTS PRIVATE LIMITED',email:'yarnviaexports5869@gmail.com',phone:'+91 87964 32623',tel:'+918796432623',hours:'Monday – Saturday, 9:00 AM – 7:00 PM',address:'H No. 9/149, Shyam Block, Kailash Nagar, Gandhi Nagar, East Delhi, Delhi 110031, India'};
export const commerce={freeAbove:599,shippingFee:59,dispatch:'24–48 hours',delivery:'3–6 working days',returnDays:7,reportHours:48,refundDays:'5–10 business days'};
export const effective='25 October 2026';
const c=company,m=commerce;
const contactLine=`${c.legal}, ${c.address}. Email: ${c.email} · Phone: ${c.phone} (${c.hours}).`;

export const policies={
'/privacy-policy':{title:'Privacy Policy',intro:`This policy explains what personal information ${c.brand} (operated by ${c.legal}) collects when you use our website, and how it is used, shared and protected.`,sections:[
['Information we collect',['Contact details: your name, email address and mobile number.','Delivery and billing address, including PIN code.','Payment details, which are entered on and processed by third-party payment gateways. We do not store card numbers, UPI PINs or net-banking passwords.','Cookies and usage data such as pages visited, device and browser type.']],
['How we use your information',['To process, pack, ship and track your orders.','To contact you about your order, returns, refunds and support requests.','To improve our catalogue, website and service.','To meet legal, tax and accounting obligations.']],
['Payment information','Payments are handled by RBI-regulated payment gateways and banks. Their own privacy and security terms apply to the payment data you share with them.'],
['Cookies','Cookies keep your cart, saved favourites and preferences working. You can turn cookies off in your browser settings, but some features of the site may then not work.'],
['Sharing of information',['Payment gateways, to complete your payment.','Courier and logistics partners, to deliver your order.','IT, hosting and messaging providers that help us run the store.','Government or law-enforcement authorities when required by law.','We do not sell or rent your personal information.']],
['Data security','We use reasonable technical and organisational safeguards to protect your information. No method of transmission over the internet is fully secure, so we cannot guarantee absolute security.'],
['Your rights','You can ask to access, correct or update your personal information, or ask us to delete your account and data, subject to legal and business record-keeping requirements. Write to us at the email below.'],
["Children's privacy",'Our website is not directed at children. We do not knowingly collect personal information from children under 18 without the consent of a parent or guardian.'],
['Third-party links','Our site may link to other websites, such as social media pages. We are not responsible for their content or privacy practices.'],
['Changes to this policy','We may update this policy from time to time. The effective date at the top of this page shows when it was last changed.'],
['Grievance Officer',`If you have a concern about how your data is handled, contact our Grievance Officer at ${c.email} or ${c.phone}. We acknowledge complaints within 48 hours and aim to resolve them within 30 days.`],
['Contact information',contactLine]]},

'/terms-and-conditions':{title:'Terms & Conditions',intro:`These terms are an agreement between you and ${c.legal} for using the ${c.brand} website and placing orders. By using the site you accept these terms.`,sections:[
['About us',`${c.brand} is a brand of ${c.legal}, registered at ${c.address}. We sell seeds, grow bags, fertilizers and garden supplies for home gardeners.`],
['Eligibility','You must be 18 or older to place an order, or use the site under the supervision of a parent or guardian.'],
['Products','We describe products, pack sizes and images as accurately as we can. Natural products such as seeds may vary slightly in colour or size. Germination and yield depend on sowing method, soil, water, sunlight and climate, so we cannot guarantee a particular result.'],
['Pricing',`All prices are in Indian Rupees (₹) and include applicable taxes. Delivery is free on orders of ₹${m.freeAbove} or more; a flat ₹${m.shippingFee} delivery charge applies below that. Prices may change without notice; the price shown at checkout is the price you pay.`],
['Orders','An order is confirmed when you receive our confirmation. We may cancel an order if a product is out of stock, the price was listed in error, or the order appears fraudulent. Any amount paid for a cancelled order is refunded in full.'],
['Payments','Payments are processed through secure third-party payment gateways. We are not responsible for gateway or bank downtime, failed transactions or delays caused by them.'],
['Shipping',`Orders are dispatched within ${m.dispatch} and usually delivered within ${m.delivery}. See our Shipping & Delivery Policy for details.`],
['Returns and refunds','Cancellations, returns, exchanges and refunds are governed by our Refund & Cancellation Policy.'],
['Intellectual property',`All content on this website, including the ${c.brand} name, logo, text and images, belongs to ${c.legal} and may not be copied or reused without written permission.`],
['Prohibited activities',['Using the site for any unlawful purpose or to place fake orders.','Attempting to hack, disrupt or overload the website.','Copying, scraping or reselling site content.','Giving false information or impersonating another person.']],
['Limitation of liability','To the extent permitted by law, our liability for any order is limited to the amount you paid for it. We are not liable for indirect or consequential loss, including crop or yield loss.'],
['Governing law','These terms are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of the courts in Delhi.'],
['Contact',contactLine]]},

'/refund-and-cancellation-policy':{title:'Refund & Cancellation Policy',intro:'These rules apply to cancelling an order, returning items, exchanges and refunds.',table:[
['Cancellation','Allowed before dispatch only'],
['Return window',`${m.returnDays} days from delivery`],
['Returnable when','Damaged, wrong item, manufacturing defect, or unopened with seal and packaging intact'],
['Not returnable','Opened or sown seed packets, used grow bags, opened fertilizers and potting mixes, items without original packaging'],
['Damaged or wrong item',`Report within ${m.reportHours} hours of delivery with photos of the product and packaging`],
['Refund timing',`${m.refundDays}, back to the original payment method`],
['Shipping charges','Not refunded, unless the error was ours'],
['Exchange','Allowed if the item is in stock']],sections:[
['How to cancel',`Email ${c.email} or call ${c.phone} with your order ID before the order is dispatched. Once dispatched, an order can no longer be cancelled; you may return it under this policy instead.`],
['How to request a return',['Write to us within the return window with your order ID, the reason, and clear photos of the product and packaging.','We will confirm whether the item is eligible and share the return or pickup details.','Pack the item securely in its original packaging.']],
['Refunds','Once we receive and inspect the returned item, we will tell you whether the refund is approved. Approved refunds are issued to the original payment method. Cash-on-delivery refunds are paid by bank transfer or UPI to an account you provide.'],
['Seeds and germination','Because germination depends on sowing conditions, a packet that fails to germinate is not by itself a manufacturing defect. Write to us anyway — we review each case and will help where we can.'],
['Contact',contactLine]]},

'/shipping-policy':{title:'Shipping & Delivery Policy',intro:'How and when your order reaches you.',table:[
['Dispatch',`Within ${m.dispatch} of order confirmation (excluding Sundays and public holidays)`],
['Delivery time',`${m.delivery} after dispatch, depending on your PIN code`],
['Delivery charge',`Free on orders of ₹${m.freeAbove} or more; flat ₹${m.shippingFee} below that`],
['Coverage','Serviceable PIN codes across India'],
['Tracking','Tracking details are shared by email or SMS once the order is dispatched']],sections:[
['Delays','Delivery may take longer in remote areas, during festivals, bad weather or courier disruptions. We will keep you informed if your order is delayed.'],
['Address and delivery attempts','Please enter a complete address and an active mobile number. If a delivery fails because the address is wrong or nobody is available, re-shipping charges may apply.'],
['Damaged parcels',`If the parcel arrives damaged or tampered with, take photos and report it within ${m.reportHours} hours of delivery under our Refund & Cancellation Policy.`],
['Contact',contactLine]]}};

export const faqs=[
['How long does delivery take?',`Orders are dispatched within ${m.dispatch} and usually delivered within ${m.delivery}. Delivery is free above ₹${m.freeAbove}.`],
['Can I return my order?',`Yes, within ${m.returnDays} days of delivery for damaged, wrong or defective items, or unopened items with packaging intact. Opened seed packets cannot be returned.`],
['How can I track my shipment?','We share tracking details by email or SMS once your order is dispatched. You can also write to us with your order ID.']];
