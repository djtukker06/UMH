"use client";

import { ArrowRight, CalendarBlank, Clock, MapPin, Sparkle, Ticket, UsersThree } from "@phosphor-icons/react";
import { nextMoment } from "@/lib/content";
import { Title } from "./Title";
import { useLang } from "./LangProvider";

export function Moment() {
  const { lang, t } = useLang();
  const subject = encodeURIComponent(`${t("moment.subject")} ${nextMoment.date[lang]}`);
  const mailto = `mailto:${nextMoment.signupEmail}?subject=${subject}`;

  return (
    <section className="moment" id="moment">
      <div className="container">
        <Title lines={[t("moment.l1"), t("moment.l2")]} script={t("moment.script")} />

        <div className="ticket" data-reveal>
          <div className="ticket__main">
            <dl className="ticket__grid">
              <div className="ticket__row">
                <dt><Sparkle size={20} aria-hidden="true" /><span>{t("moment.what")}</span></dt>
                <dd><strong>{nextMoment.activity}</strong><span>{t("moment.speaker")}: {nextMoment.speaker}</span></dd>
              </div>
              <div className="ticket__row">
                <dt><CalendarBlank size={20} aria-hidden="true" /><span>{t("moment.when")}</span></dt>
                <dd><strong>{nextMoment.weekday[lang]} {nextMoment.date[lang]}</strong><span>{nextMoment.time}</span></dd>
              </div>
              <div className="ticket__row">
                <dt><MapPin size={20} aria-hidden="true" /><span>{t("moment.where")}</span></dt>
                <dd><strong>{nextMoment.location}</strong></dd>
              </div>
              <div className="ticket__row">
                <dt><Clock size={20} aria-hidden="true" /><span>{t("moment.howlong")}</span></dt>
                <dd><strong>{nextMoment.duration[lang]}</strong></dd>
              </div>
              <div className="ticket__row">
                <dt><Ticket size={20} aria-hidden="true" /><span>{t("moment.spots")}</span></dt>
                <dd><strong>{nextMoment.spots}</strong></dd>
              </div>
              <div className="ticket__row">
                <dt><UsersThree size={20} aria-hidden="true" /><span>{t("moment.who")}</span></dt>
                <dd><strong>{t("moment.whoVal")}</strong><span>{t("moment.whoHint")}</span></dd>
              </div>
            </dl>
          </div>
          <div className="ticket__stub">
            <p className="ticket__stubtext">{t("moment.stub")}</p>
            <a className="btn btn--dark" href={mailto} data-magnetic>
              <span>{t("nav.cta")}</span>
              <ArrowRight className="btn__right" size={18} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
