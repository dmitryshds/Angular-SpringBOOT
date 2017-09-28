-- Database: auction

-- DROP DATABASE auction;

CREATE DATABASE auction
WITH OWNER = postgres
ENCODING = 'UTF8'
TABLESPACE = pg_default
LC_COLLATE = 'Russian_Ukraine.1251'
LC_CTYPE = 'Russian_Ukraine.1251'
CONNECTION LIMIT = -1;

-- Table: public.category

-- DROP TABLE public.category;

CREATE TABLE public.category
(
  id bigint NOT NULL DEFAULT nextval('category_id_seq'::regclass),
  name character varying(255),
  CONSTRAINT category_pkey PRIMARY KEY (id)
)
WITH (
OIDS=FALSE
);
ALTER TABLE public.category
  OWNER TO postgres;

-- Table: public.item

-- DROP TABLE public.item;

CREATE TABLE public.item
(
  item_id bigint NOT NULL DEFAULT nextval('item_item_id_seq'::regclass),
  descr character varying(255),
  name character varying(255),
  price numeric(19,2),
  id bigint,
  CONSTRAINT item_pkey PRIMARY KEY (item_id),
  CONSTRAINT fk9lw5wfao8596b7t95we9wh56i FOREIGN KEY (id)
  REFERENCES public.category (id) MATCH SIMPLE
  ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
OIDS=FALSE
);
ALTER TABLE public.item
  OWNER TO postgres;
-- Table: public.pictures

-- DROP TABLE public.pictures;

CREATE TABLE public.pictures
(
  id bigint NOT NULL,
  pictures character varying(255),
  CONSTRAINT fkm6o1ed65ec2odgtut8hcxkig0 FOREIGN KEY (id)
  REFERENCES public.item (item_id) MATCH SIMPLE
  ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
OIDS=FALSE
);
ALTER TABLE public.pictures
  OWNER TO postgres;
